import React, { useState } from "react";
import "./WalletPage.css"; // CSS file for styling

const WalletPage = () => {
  // Sample wallet balance and transactions
  const [balance] = useState(50000); // In Rupees
  const transactions = [
    { id: 1, description: "Loose", amount: -2000 },
    { id: 2, description: "Winning", amount: +40000 },
    { id: 3, description: "Winning", amount: -3500 },
    { id: 4, description: "Loose", amount: -10000 },
    { id: 5, description: "Received Cashback", amount: +500 },
  ];

  return (
    <div className="wallet-container">
      {/* Wallet Balance Section */}
      <div className="wallet-summary">
        <h2>Wallet Balance</h2>
        <p className="amount">₹{balance.toLocaleString()}</p>
      </div>

      {/* Transactions Section */}
      <div className="transaction-list">
        <h3>Recent Transactions</h3>
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction.id}>
              <span className="description">{transaction.description}</span>
              <span className={`amount ${transaction.amount > 0 ? "credit" : "debit"}`}>
                {transaction.amount > 0 ? "+" : ""}₹{Math.abs(transaction.amount).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WalletPage;