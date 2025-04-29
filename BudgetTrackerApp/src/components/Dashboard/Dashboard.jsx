import React, { useState } from 'react';
import AddExpenseForm from '../AddExpenseForm/AddExpenseForm';
import TransactionsList from '../TransactionsList/TransactionsList';
import './Dashboard.css';

function Dashboard() {
  const [transactions, setTransactions] = useState([
    { id: 1, name: 'Groceries', amount: 50, category: 'Food', date: 'Today' },
    { id: 2, name: 'Rent', amount: 1200, category: 'Housing', date: 'Jun 5' },
    { id: 3, name: 'Coffee', amount: 4, category: 'Food', date: 'Jun 5' }
  ]);

  const [budget, setBudget] = useState(5000);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, { ...transaction, id: Date.now() }]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const totalExpenses = transactions.reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="dashboard">
      <h1>Hello, Tyer!</h1>
      <div className="summary">
        <div className="card">
          <h3>Total Budget</h3>
          <p>${budget}</p>
        </div>
        <div className="card">
          <h3>Total Expenses</h3>
          <p>${totalExpenses}</p>
        </div>
      </div>
      <div className="main-section">
        <AddExpenseForm addTransaction={addTransaction} />
        <TransactionsList transactions={transactions} deleteTransaction={deleteTransaction} />
      </div>
    </div>
  );
}

export default Dashboard;
