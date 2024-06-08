import React from 'react';

function Home() {
  return (
    <section className="home">
      <h1>Nimri's Space Station</h1>
      <button>Start Game</button>
      <button>Buy Resources</button>
      <button>Tutorial</button>
      <button>Donations</button>
      <div className="stats">
        <p>Total Leaderboard rewards paid: 120 000 SWAY</p>
        <p>Total Players: 120</p>
        <p>Enemy Fleet destroyed: 1Mil +</p>
      </div>
    </section>
  );
}

export default Home;
