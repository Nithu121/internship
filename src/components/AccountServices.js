

import React, { useState } from 'react';

function AccountServices() {
  const [balance, setBalance] = useState(1000); // Mock initial balance

  const handleDeposit = () => {
    const amount = prompt("Enter amount to deposit:");
    if (amount) setBalance(balance + parseFloat(amount));
  };

  const handleWithdraw = () => {
    const amount = prompt("Enter amount to withdraw:");
    if (amount && amount <= balance) {
      setBalance(balance - parseFloat(amount));
    } else {
      alert("Insufficient balance or invalid amount.");
    }
  };

  return (
    <div className="account-services">
      <h2>Account Services</h2>
      <p>Account Balance: ${balance.toFixed(2)}</p>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
}

export default AccountServices;

