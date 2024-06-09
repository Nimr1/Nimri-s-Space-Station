import React from 'react';

function ResourceManagement() {
  return (
    <section className="resource-management">
      <h1>Resource Management</h1>
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

export default ResourceManagement;
