import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo">Accounting System</div>
        <nav className="nav-links">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/transactions">Transactions</Link>
          <Link to="/reports">Reports</Link> {/* Updated to use Link */}
          <Link to="/accounts">Accounts</Link>
          <Link to="/settings">Settings</Link>
          <Link to="/help">Help</Link>
        </nav>
        <div className="user-profile">
          <Link to="/"><div className="dropdown">Logout</div></Link>
        </div>
      </header>

      <main className="dashboard">
        <section className="welcome">
          <h1>Welcome back, [User]!</h1>
        </section>
        
        <section className="stats">
          <div className="stat-card">Total Income: $XX,XXX</div>
          <div className="stat-card">Expenses: $X,XXX</div>
          <div className="stat-card">Net Profit: $XX,XXX</div>
          <div className="stat-card">Outstanding Invoices: $X,XXX</div>
        </section>
        
        <section className="charts">
          <div className="chart">Income vs. Expenses</div>
          <div className="chart">Cash Flow</div>
          <div className="chart">Accounts Overview</div>
        </section>
        
        <section className="quick-actions">
          <button>Add Transaction</button>
          <Link to="/reports"><button>Generate Report</button></Link> {/* Link to Report page */}
          <button>Reconcile Accounts</button>
        </section>
      </main>
      
      <footer className="footer">
        <p>© 2024 Accounting System | <Link to="/privacy">Privacy Policy</Link> | <Link to="/terms">Terms of Service</Link></p>
      </footer>
    </div>
  );
}

export default Home;
