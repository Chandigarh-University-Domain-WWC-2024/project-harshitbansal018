
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Rewards from './components/Rewards';
import Community from './components/Community';
import React, { useState } from 'react';

import './App.css';
import Footer from './components/Footer';

const App = () => {
  const [points, setPoints] = useState(0); // Initial points for rewards

  // Function to add points
  const addPoints = (practice) => {
    if (practice === 'used public transport') {
      setPoints(points + 10);
    } else if (practice === 'recycle waste') {
      setPoints(points + 15);
    } else if (practice === 'used recycle bags') {
      setPoints(points + 5);
    }
  };
  const redeemPoints = () => {
    if (points >= 10) {
      setPoints((prevPoints) => prevPoints - 10);
    } else {
      alert("You don't have enough points to redeem!");
    }
  };
  return (
    <div className="App">
      <Navbar />
      <Dashboard />
      <Rewards points={points} handleRedeem={redeemPoints} />
      <Community addPoints={addPoints} />
      <Footer/>
    
    
   </div>
  );
};

export default App;