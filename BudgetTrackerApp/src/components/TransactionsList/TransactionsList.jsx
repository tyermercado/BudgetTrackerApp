import React from 'react';
import './TransactionsList.css';

function TransactionsList({ transactions, deleteTransaction }) {
  return (
    <div className="transactions-list">
      <h3>Recent Transactions</h3>
      {transactions.map((t) => (
        <div className="transaction" key={t.id}>
          <div>
            <strong>{t.name}</strong>
            <small>{t.date}</small>
          </div>
          <div>
            <span>${t.amount}</span>
            <button onClick={() => deleteTransaction(t.id)}>🗑️</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TransactionsList;
