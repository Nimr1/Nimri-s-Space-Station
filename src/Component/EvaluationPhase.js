// src/components/EvaluationPhase.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const EvaluationPhase = () => {
  const navigate = useNavigate();

  const startPreparation = () => {
    navigate('/preparation-phase');
  };

  return (
    <div className="evaluation-phase">
      <h1>Evaluation Phase</h1>
      <button onClick={startPreparation}>Start Preparation Phase</button>
    </div>
  );
};

export default EvaluationPhase;
