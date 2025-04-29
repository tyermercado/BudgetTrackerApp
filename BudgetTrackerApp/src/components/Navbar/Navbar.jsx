import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">BudgetBuddy</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Expenses</li>
        <li>Reports</li>
        <li>Settings</li>
      </ul>
      <div className="profile-icon">👤</div>
    </nav>
  );
}

export default Navbar;
