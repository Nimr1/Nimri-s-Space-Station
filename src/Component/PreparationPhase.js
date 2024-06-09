// src/components/PreparationPhase.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PreparationPhase = () => {
  const navigate = useNavigate();
  const [crewmatesCount, setCrewmatesCount] = useState(13);
  const [waveAvailability, setWaveAvailability] = useState(10);
  const [selectedRole, setSelectedRole] = useState('');

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
  };

  const handleInputChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setCrewmatesCount(crewmatesCount - value);
    setWaveAvailability(waveAvailability - value);
  };

  const startDefence = () => {
    navigate('/defence-phase');
    setTimeout(() => {
      navigate('/evaluation-phase');
    }, 10000);
  };

  return (
    <div className="preparation-phase">
      <h1>Preparation Phase</h1>
      <p>Crewmates Count: {crewmatesCount}</p>
      <p>Wave Availability: {waveAvailability}</p>
      <div className="hotbar">
        {['Engineer', 'Pilot', 'Scientist', 'Miner', 'Merchant'].map((role) => (
          <button key={role} onClick={() => handleRoleSelection(role)}>
            {role}
          </button>
        ))}
      </div>
      {selectedRole && (
        <div className="role-details">
          <h2>{selectedRole}</h2>
          {selectedRole === 'Engineer' && (
            <div>
              <p>Repair: <input type="number" onChange={handleInputChange} /></p>
              <p>Build: <input type="number" onChange={handleInputChange} /></p>
              <p>Charge Shield Batteries: <input type="number" onChange={handleInputChange} /></p>
            </div>
          )}
          {selectedRole === 'Miner' && (
            <div>
              <p>Build Turrets: <input type="number" /></p>
              <p>Build Shields: <input type="number" /></p>
              <p>Build Armor: <input type="number" /></p>
              <p>Farm Snacks: <input type="number" /></p>
              <p>Discover Research Samples: <input type="number" /></p>
            </div>
          )}
          {selectedRole === 'Merchant' && (
            <div>
              <p>Improve Engineers: <input type="number" /></p>
              <p>Improve Scientists: <input type="number" /></p>
              <p>Improve Pilots: <input type="number" /></p>
              <p>Improve Miners: <input type="number" /></p>
              <p>Improve Sway to Resource conversion: <input type="number" /></p>
            </div>
          )}
          {selectedRole === 'Pilot' && (
            <div>
              <p>Area 1: <input type="number" /></p>
              <p>Area 2: <input type="number" /></p>
              <p>Area 3: <input type="number" /></p>
            </div>
          )}
          {selectedRole === 'Scientist' && (
            <div>
              <p>Research: <input type="number" /></p>
              <p>Building: <input type="number" /></p>
              <p>Research status: <input type="number" /></p>
              <p>Improves Station: <input type="number" /></p>
              <p>Improves Defences: <input type="number" /></p>
            </div>
          )}
        </div>
      )}
      <button onClick={startDefence}>Start Defence Phase</button>
    </div>
  );
};

export default PreparationPhase;
