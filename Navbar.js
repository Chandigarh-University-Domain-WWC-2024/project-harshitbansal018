import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Eco-Friendly Tourism Tracker</h1>
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#rewards">Rewards</a></li>
        <li><a href="#community">Community</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;