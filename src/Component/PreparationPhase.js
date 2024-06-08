import React from 'react';

function PreparationPhase() {
  return (
    <section className="preparation-phase">
      <h1>Preparation Phase</h1>
      <h2>Actions:</h2>
      <ul>
        <li>Add Turrets</li>
        <li>Recharge Shield Batteries</li>
        <li>Add Armor Plates</li>
        <li>Recharge Research Samples</li>
        <li>Store Snacks</li>
      </ul>
      <div className="stats">
        <p>Amount of turrets in inventory: 10</p>
        <p>Amount of shield batteries in inventory: 10</p>
        <p>Amount of armor plates in inventory: 10</p>
        <p>Amount of research samples in inventory: 10</p>
        <p>Amount of snacks in inventory: 10</p>
      </div>
    </section>
  );
}

export default PreparationPhase;
