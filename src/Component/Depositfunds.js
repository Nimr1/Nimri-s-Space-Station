import React from 'react';

function DepositFunds() {
  return (
    <section className="deposit-funds">
      <h1>Deposit Funds</h1>
      <div className="stats">
        <p>SWAY in wallet: 120 000</p>
      </div>
      <h2>Resources in-game:</h2>
      <ul>
        <li>Turrets: 10</li>
        <li>Shield Batteries: 10</li>
        <li>Armor Plates: 10</li>
        <li>Research Samples: 10</li>
        <li>Snacks: 10</li>
      </ul>
      <button>Convert SWAY to Resources</button>
    </section>
  );
}

export default DepositFunds;
