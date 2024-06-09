// src/components/DepositFunds.js

import React from 'react';

const DepositFunds = () => {
  return (
    <div className="deposit-funds">
      <h1>Deposit Funds</h1>
      <p>SWAY in wallet: 120,000</p>
      <p>Resources ingame:</p>
      <ul>
        <li>Turrets: 10</li>
        <li>Shield Batteries: 10</li>
        <li>Armor Plates: 10</li>
        <li>Research Samples: 10</li>
        <li>Snacks: 10</li>
      </ul>
      <button>Deposit</button>
    </div>
  );
};

export default DepositFunds;
