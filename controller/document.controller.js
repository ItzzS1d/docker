import puppeteer from "puppeteer-core";
import axios from "axios";
import * as cheerio from "cheerio";
import Document from "../model/dataSchema.js";
import generateHTMLTable from "../libs/generateHtmlTable.js";

export const generatePdf = async (req, res) => {
  const { workCode, Srno, financial_year } = req.query;
  if (!workCode || !Srno || !financial_year) {
    return res
      .status(400)
      .json({ error: "Work Code , Srno,financial_year is required" });
  }

  const pgCode = workCode.substring(0, 10);

  const match = await Document.findOne({ pgCode });
  if (!match) return res.status(404).json({ error: "Document not found" });

  try {
    const workUrl = `https://mnregaweb4.nic.in/netnrega/specific_work_multi_rpt_dtl.aspx?panchayat_code=${match.pgCode}&Fin_Year=${financial_year}&Srno=${Srno}&state_code=15&state_name=KARNATAKA&district_name=KALABURAGI&block_name=${match.taluka}&panchayat_name=${match.pgName}&work_code=${workCode}&block_code=1515014&district_code=1515`;

    const response = await axios.get(workUrl);
    const htmlContent = response.data;
    const $ = cheerio.load(htmlContent, { decodeEntities: false });

    // Extract table data
    const tableData = [];
    $("table tr").each((i, row) => {
      const cells = $(row).find("td");
      if (cells.length > 0) {
        const srNo = $(cells[0]).text().trim();
        const workCode = $(cells[1]).text().trim();
        const jobCard = $(cells[2]).text().trim();
        const applicantName = $(cells[3]).html();
        const fromDate = $(cells[4]).text().trim();
        const toDate = $(cells[5]).text().trim();
        const daysAllocated = $(cells[6]).text().trim();

        if (srNo && workCode) {
          tableData.push({
            srNo,
            workCode,
            jobCard,
            applicantName,
            fromDate,
            toDate,
            daysAllocated,
          });
        }
      }
    });

    const tableHtml = generateHTMLTable(tableData);

    const browser = await puppeteer.launch({
      executablePath: process.env.CHROME_BIN || "/usr/bin/google-chrome",
      args: [
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--font-render-hinting=none",
      ],
      headless: "new",
    });

    const page = await browser.newPage();

    const html = `
    <!DOCTYPE html>
    <html lang="kn">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Work Data</title>
      <style>
        @font-face {
          font-family: 'Noto Sans Kannada';
          src: local('Noto Sans Kannada');
        }
        
        table {
          border-collapse: collapse;
          font-family: 'Noto Sans Kannada', Arial, sans-serif;
          font-size: 11px;
          font-weight: bold;
        }
        th,
        td {
          border: 1px solid #28282B;
          padding: 8px;
          font-weight: bold;
          text-align: center;
        }
        th {
          background-color: #f2f2f2;
          font-weight: bold;
        }
        .centered {
          text-align: center;
        }
        .sr-no {
          width: 10px;
        }
        .work-code {
          width: 50px;
        }
        .job-card {
          width: 80px;
        }
        .applicant-no {
          width: 10px;
        }
        .name {
          width: 50px;
        }
        .date {
          width: 20px;
        }
        .days {
          width: 10px;
        }
      </style>
    </head>
    <body>
      <table>
        <tbody>
          ${tableHtml}
        </tbody>
      </table>
      <div id="fonts-loaded">Fonts Loaded</div>
    </body>
    </html>
    `;

    await page.setContent(html, {
      waitUntil: "networkidle0",
    });

    // Wait for fonts to load using a different method
    await page.evaluate(() => {
      return new Promise((resolve) => {
        // Check if document is already loaded
        if (document.fonts.ready) {
          resolve();
        } else {
          // Wait for fonts to load
          document.fonts.ready.then(() => {
            resolve();
          });
        }
      });
    });

    // Additional wait for rendering
    await page.evaluate(
      () => new Promise((resolve) => setTimeout(resolve, 1000))
    );

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: "20px",
        right: "20px",
        bottom: "20px",
        left: "20px",
      },
    });

    res.set({
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="work-data.pdf"`,
      "Content-Length": pdfBuffer.length,
    });
    res.end(pdfBuffer);

    await browser.close();
  } catch (error) {
    console.error("Error generating PDF:", error);
    return res.status(500).json({ error: "Failed to generate PDF." });
  }
};
