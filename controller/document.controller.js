import puppeteer from "puppeteer-core";
import axios from "axios";
import * as cheerio from "cheerio";
import Document from "../model/dataSchema.js";

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

    // Extract table data (skip the header rows)
    const tableData = [];
    $("table tr").each((i, row) => {
      // Skip the first two rows (header and MGNREGA Act line)
      if (i <= 1) return;

      const cells = $(row).find("td");
      if (cells.length > 0) {
        const srNo = $(cells[0]).text().trim();
        const workCode = $(cells[1]).text().trim();
        const jobCard = $(cells[2]).text().trim();
        const applicantNo = $(cells[3]).text().trim();
        const applicantName = $(cells[4]).html();
        const fromDate = $(cells[5]).text().trim();
        const toDate = $(cells[6]).text().trim();
        const daysAllocated = $(cells[7]).text().trim();

        // Only add rows that have a valid Sr. No.
        if (srNo && !isNaN(parseInt(srNo))) {
          tableData.push({
            srNo,
            workCode,
            jobCard,
            applicantNo,
            applicantName,
            fromDate,
            toDate,
            daysAllocated,
          });
        }
      }
    });

    // Generate table rows HTML without headers
    const tableRowsHtml = tableData
      .map(
        (row) => `
      <tr>
        <td class="sr-no">${row.srNo}</td>
        <td class="work-code">${row.workCode}</td>
        <td class="job-card">${row.jobCard}</td>
        <td class="applicant-no">${row.applicantNo}</td>
        <td class="applicant-name">${row.applicantName}</td>
        <td class="date">${row.fromDate}</td>
        <td class="date">${row.toDate}</td>
        <td class="days">${row.daysAllocated}</td>
      </tr>
    `
      )
      .join("");

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
        
        body {
          font-family: 'Noto Sans Kannada', Arial, sans-serif;
        }

        table {
          border-collapse: collapse;
          width: 100%;
          font-size: 10px;
        }

        th, td {
          border: 1px solid black;
          padding: 4px;
          text-align: center;
          font-weight: normal;
          height: 20px;
          white-space: nowrap;
        }

        th {
          background-color: white;
          font-weight: bold;
        }

        /* Column widths to match first image */
        .sr-no {
          width: 30px;
        }
        .work-code {
          width: 150px;
        }
        .job-card {
          width: 120px;
        }
        .applicant-no {
          width: 40px;
        }
        .applicant-name {
          width: 120px;
        }
        .date {
          width: 80px;
        }
        .days {
          width: 20px;
        }

        /* Ensure consistent row heights */
        tr {
          height: 25px;
        }
      </style>
    </head>
    <body>
      <table>
        <thead>
          <tr>
            <th class="sr-no">Sr. No.</th>
            <th class="work-code">Work Code</th>
            <th class="job-card">Job Card No.</th>
            <th class="applicant-no">Applicant No.</th>
            <th class="applicant-name">Applicant Name</th>
            <th class="date">Allocation From Date</th>
            <th class="date">Allocation To Date</th>
            <th class="days">No. of Days Allocated</th>
          </tr>
        </thead>
        <tbody>
          ${tableRowsHtml}
        </tbody>
      </table>
    </body>
    </html>
    `;

    await page.setContent(html, {
      waitUntil: "networkidle0",
    });

    // Wait for fonts to load
    await page.evaluate(() => {
      return new Promise((resolve) => {
        if (document.fonts.ready) {
          resolve();
        } else {
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
