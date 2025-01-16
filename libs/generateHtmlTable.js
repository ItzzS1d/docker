function generateHTMLTable(data) {
  let tableHtml = `
      <table border="1" style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th>Sr. No.</th>
            <th>Work Code</th>
            <th>Job Card No.</th>
            <th>Applicant Name</th>
            <th>Allocation From Date</th>
            <th>Allocation To Date</th>
            <th>No. of Days Allocated</th>
          </tr>
        </thead>
        <tbody>
    `;

  // Dynamically generate table rows excluding the first row
  data.slice(1).forEach((row) => {
    tableHtml += `
        <tr>
          <td>${row.srNo || ""}</td>
          <td>${row.workCode || ""}</td>
          <td>${row.jobCard || ""}</td>
          <td>${row.applicantName || ""}</td>
          <td>${row.fromDate || ""}</td>
          <td>${row.toDate || ""}</td>
          <td>${row.daysAllocated || ""}</td>
        </tr>
      `;
  });

  tableHtml += `
        </tbody>
      </table>
    `;
  return tableHtml;
}

export default generateHTMLTable;
