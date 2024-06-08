import React from 'react';

function DefencePhase() {
  return (
    <section className="defence-phase">
      <h1>Defence Phase</h1>
      <img src="/path/to/space-station-image.png" alt="Space Station" />
      <div className="stats">
        <p>Wave: 1</p>
        <p>Shield status: 95%</p>
        <p>HP: 100%</p>
      </div>
      <h2>Resources Lost:</h2>
      <ul>
        <li>Turrets: 10</li>
        <li>Shield Batteries: 100</li>
        <li>Armor Plates: 2</li>
        <li>Research Samples: 10</li>
        <li>Snacks: 18</li>
      </ul>
      <div>Graphs will go here</div>
    </section>
  );
}

export default DefencePhase;
