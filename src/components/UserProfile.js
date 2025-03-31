

import React, { useState } from 'react';

function UserProfile() {
  const [balance, setBalance] = useState(50000); // Mock balance in INR
  const [transactions, setTransactions] = useState([
    { id: 1, date: '2025-03-01', type: 'Deposit', amount: 10000 },
    { id: 2, date: '2025-03-05', type: 'Withdrawal', amount: -5000 },
  ]);
  const [creditScore, setCreditScore] = useState(750); // Mock credit score
  const [loanEMI, setLoanEMI] = useState(null);

  // Handle Transactions
  const handleTransaction = (type) => {
    const amount = parseFloat(prompt(`Enter amount to ${type.toLowerCase()} (in ₹):`));
    if (isNaN(amount) || amount <= 0) {
      alert('Invalid amount.');
      return;
    }

    if (type === 'Withdraw' && amount > balance) {
      alert('Insufficient balance.');
      return;
    }

    const newBalance = type === 'Deposit' ? balance + amount : balance - amount;
    setBalance(newBalance);

    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      type,
      amount: type === 'Deposit' ? amount : -amount,
    };

    setTransactions([newTransaction, ...transactions]);
  };

  // Loan Calculator Logic
  const calculateLoanEMI = () => {
    const principal = parseFloat(prompt('Enter loan amount (Principal) in ₹:'));
    const rate = parseFloat(prompt('Enter annual interest rate (%):'));
    const tenure = parseFloat(prompt('Enter tenure (in months):'));

    if (isNaN(principal) || isNaN(rate) || isNaN(tenure) || principal <= 0 || rate <= 0 || tenure <= 0) {
      alert('Invalid input values.');
      return;
    }

    const monthlyRate = rate / 12 / 100;
    const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenure)) / (Math.pow(1 + monthlyRate, tenure) - 1);
    setLoanEMI(emi.toFixed(2));
  };

  // Payment Service
  const handlePayment = () => {
    const recipient = prompt('Enter recipient name:');
    const amount = parseFloat(prompt('Enter payment amount in ₹:'));
    if (!recipient || isNaN(amount) || amount <= 0 || amount > balance) {
      alert('Invalid recipient or amount.');
      return;
    }

    const newBalance = balance - amount;
    setBalance(newBalance);

    const newTransaction = {
      id: transactions.length + 1,
      date: new Date().toISOString().split('T')[0],
      type: `Payment to ${recipient}`,
      amount: -amount,
    };

    setTransactions([newTransaction, ...transactions]);
    alert(`Payment of ₹${amount} to ${recipient} was successful.`);
  };

  return (
    <div className="user-profile">
      <h2>Welcome, Nithesh!</h2>
      <p>Account Number: 123456</p>
      <p>Branch: Mangalore</p>
      <p>Account Balance: ₹{balance.toFixed(2)}</p>
      <button onClick={() => handleTransaction('Deposit')}>Deposit</button>
      <button onClick={() => handleTransaction('Withdraw')}>Withdraw</button>
      <button onClick={calculateLoanEMI}>Loan Calculator</button>
      <button onClick={handlePayment}>Make a Payment</button>
      <h3>Credit Score: {creditScore}</h3>
      {loanEMI && <p>Calculated Loan EMI: ₹{loanEMI}</p>}
      <h3>Transaction History</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.type}</td>
              <td className={transaction.amount < 0 ? 'negative' : 'positive'}>
                {transaction.amount < 0 ? '-' : '+'}₹{Math.abs(transaction.amount).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserProfile;
