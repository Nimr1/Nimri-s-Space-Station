// src/components/Home.js

import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <h1>Nimri's Space Station</h1>
      <p>Welcome to the space station defense game.</p>
      <div className="home-buttons">
        <button>Start Game</button>
        <button>Buy Resources</button>
        <button>Tutorial</button>
        <button>Donations</button>
      </div>
      <p>Total Leaderboard rewards paid: 120,000 SWAY</p>
      <p>Total Players: 4</p>
      <p>Enemy Fleet destroyed: 1000+</p>
    </div>
  );
};

export default Home;
