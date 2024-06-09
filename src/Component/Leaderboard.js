// src/components/Leaderboard.js

import React from 'react';

function Leaderboard() {
  const leaderboardData = [
    { position: '1st', wave: 20, player: 'Peter Jackson', reward: '10,000 SWAY' },
    { position: '2nd', wave: 18, player: 'Dobby', reward: '8,000 SWAY' },
    { position: '3rd', wave: 15, player: 'Sarah', reward: '6,000 SWAY' },
    { position: '4th', wave: 13, player: 'Nimri', reward: '4,000 SWAY' },
    { position: '5th', wave: 12, player: 'Arthur', reward: '2,000 SWAY' },
  ];

  return (
    <div>
      <h1>Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Position</th>
            <th>Wave</th>
            <th>Player</th>
            <th>Reward</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.position}</td>
              <td>{entry.wave}</td>
              <td>{entry.player}</td>
              <td>{entry.reward}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Leaderboard;
