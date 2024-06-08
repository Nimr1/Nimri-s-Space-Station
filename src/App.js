import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import DefencePhase from './components/DefencePhase';
import DepositFunds from './components/DepositFunds';
import EvaluationPhase from './components/EvaluationPhase';
import History from './components/History';
import Leaderboard from './components/Leaderboard';
import PreparationPhase from './components/PreparationPhase';
import ResourceManagement from './components/ResourceManagement';
import Game from './components/Game';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/defence" element={<DefencePhase />} />
          <Route path="/deposit-funds" element={<DepositFunds />} />
          <Route path="/evaluation" element={<EvaluationPhase />} />
          <Route path="/history" element={<History />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/preparation" element={<PreparationPhase />} />
          <Route path="/resource-management" element={<ResourceManagement />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;




