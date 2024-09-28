import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Header Section */}
      <header className="dashboard-header">
        <div className="dashboard-logo">
          <img src="https://i.ibb.co/qkThxX8/logo.png" alt="Logo" />
          <span>My Dashboard</span>
        </div>
        <div className="user-profile">
          <img src="https://picsum.photos/id/1074/50" alt="User" />
          <span>Kenll Bravsar</span>
          {/* <i className="material-icons">expand_more</i> */}
        </div>
      </header>

      {/* Main Content Section */}
      <div className="dashboard-content">
        <div className="dashboard-section user-profile-section">
          <h2>User Profile</h2>
          <p><strong>Name:</strong> Kenll Bravsar</p>
          <p><strong>Email:</strong> kenll.bravsar@gmail.com</p>
          <p><strong>Member Since:</strong> January 2021</p>
        </div>

        <div className="dashboard-section transaction-history-section">
          <h2>Transaction History</h2>
          <ul>
            <li><strong>Date:</strong> 12 Sep 2024 - <strong>Amount:</strong> $200</li>
            <li><strong>Date:</strong> 11 Sep 2024 - <strong>Amount:</strong> $150</li>
            <li><strong>Date:</strong> 10 Sep 2024 - <strong>Amount:</strong> $300</li>
          </ul>
        </div>

        <div className="dashboard-section wallet-section">
          <h2>Wallet Balance</h2>
          <p><strong>Current Balance:</strong> $1200</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;