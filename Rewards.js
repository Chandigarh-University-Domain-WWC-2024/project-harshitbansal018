import React from 'react';
import './Rewards.css';

const Rewards = ({ points, handleRedeem }) => {
  return (
    <section id="rewards" className="rewards">
      <h2>Redeem Your Points</h2>
      <p>You have {points} points available.</p>
      <button onClick={handleRedeem}>Redeem for Discount</button>
    </section>
  );
};

export default Rewards;
