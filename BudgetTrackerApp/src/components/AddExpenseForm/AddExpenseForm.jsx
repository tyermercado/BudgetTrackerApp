import React, { useState } from 'react';
import './AddExpenseForm.css';

function AddExpenseForm({ addTransaction }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Food');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ name, amount: Number(amount), category, date });
    setName('');
    setAmount('');
    setCategory('Food');
    setDate('');
  };

  return (
    <form className="add-expense-form" onSubmit={handleSubmit}>
      <h3>Add Expense</h3>
      <input 
        type="text" 
        placeholder="Groceries" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <div className="form-group">
        <input 
          type="number" 
          placeholder="$" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          required 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option>Food</option>
          <option>Housing</option>
          <option>Utilities</option>
          <option>Entertainment</option>
        </select>
      </div>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default AddExpenseForm;
