// src/App.js

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Component/Home';
import PreparationPhase from './Component/PreparationPhase';
import DepositFunds from './Component/Depositfunds';
import History from './Component/History';
import Leaderboard from './Component/Leaderboard';
import SignIn from './Component/SignIn';
import EvaluationPhase from './Component/EvaluationPhase';
import DefencePhase from './Component/DefencePhase';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-left">
            <Link to="/">Home</Link>
            <Link to="/current-phase">Current Phase</Link>
            <Link to="/deposit-funds">Deposit Funds</Link>
            <Link to="/history">History</Link>
            <Link to="/leaderboard">Leaderboard</Link>
          </div>
          <div className="navbar-right">
            <Link to="/sign-in">Sign In</Link>
          </div>
        </nav>
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/current-phase" element={<PreparationPhase />} />
            <Route path="/deposit-funds" element={<DepositFunds />} />
            <Route path="/history" element={<History />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/preparation-phase" element={<PreparationPhase />} />
            <Route path="/evaluation-phase" element={<EvaluationPhase />} />
            <Route path="/defence-phase" element={<DefencePhase />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
