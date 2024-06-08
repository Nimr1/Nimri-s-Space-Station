import React from 'react';

function EvaluationPhase() {
  return (
    <section className="evaluation-phase">
      <h1>Evaluation Phase</h1>
      <img src="/path/to/evaluation-image.png" alt="Evaluation" />
      <div className="stats">
        <p>Outcome: Survived</p>
        <p>Wave 10 Completed</p>
      </div>
      <h2>Resources Lost:</h2>
      <ul>
        <li>Turrets: 10</li>
        <li>Shield Batteries: 100</li>
        <li>Armor Plates: 2</li>
        <li>Research Samples: 10</li>
        <li>Snacks: 18</li>
      </ul>
      <div className="stats">
        <p>Your position: 12th</p>
        <p>Your name: Nimri</p>
        <p>Current Reward: 1 000 SWAY</p>
      </div>
    </section>
  );
}

export default EvaluationPhase;
