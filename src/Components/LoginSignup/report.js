// ./Components/Report/Report.js
import React, { useState } from 'react';
import './report.css';

function Report() {
  const [reportType, setReportType] = useState('incomeStatement');

  const handleReportChange = (e) => {
    setReportType(e.target.value);
  };

  return (
    <div className="report-container">
      <header className="report-header">
        <h1>Reports</h1>
        <p>Generate and view financial reports</p>
      </header>
      
      <main className="report-content">
        <section className="report-filters">
          <h2>Select Report Type</h2>
          <select value={reportType} onChange={handleReportChange}>
            <option value="incomeStatement">Income Statement</option>
            <option value="balanceSheet">Balance Sheet</option>
            <option value="cashFlow">Cash Flow Statement</option>
          </select>
          <button>Generate Report</button>
        </section>
        
        <section className="report-display">
          <h2>Report Preview</h2>
          {reportType === 'incomeStatement' && (
            <p>Income Statement details will be displayed here.</p>
          )}
          {reportType === 'balanceSheet' && (
            <div>
              <h3>Balance Sheet</h3>
              <p>Assets: $XX,XXX</p>
              <p>Liabilities: $X,XXX</p>
              <p>Equity: $X,XXX</p>
              <p>This is a preview of the Balance Sheet report.</p>
            </div>
          )}
          {reportType === 'cashFlow' && (
            <div>
              <h3>Cash Flow Statement</h3>
              <p>Operating Activities: $XX,XXX</p>
              <p>Investing Activities: $X,XXX</p>
              <p>Financing Activities: $X,XXX</p>
              <p>This is a preview of the Cash Flow Statement report.</p>
            </div>
          )}
        </section>
      </main>
      
      <footer className="report-footer">
        <p>© 2024 Accounting System | <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
      </footer>
    </div>
  );
}

export default Report;
