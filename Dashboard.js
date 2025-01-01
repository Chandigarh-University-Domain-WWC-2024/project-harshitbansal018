import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section id="dashboard" className="dashboard">
      <h2>Your Eco-Friendly Actions</h2>
      <ul>
        <li>Used public transport - 10 points</li>
        <li>Recycled waste - 15 points</li>
        <li>Used reusable bags - 5 points</li>
      </ul>
    </section>
  );
};

export default Dashboard;