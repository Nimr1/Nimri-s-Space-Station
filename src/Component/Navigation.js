import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/current-phase">Current Phase</Link></li>
        <li><Link to="/deposit-funds">Deposit Funds</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/leaderboard">Leaderboard</Link></li>
        <li><Link to="/tutorial">Tutorial</Link></li>
        <li><Link to="/preparation-phase">Preparation Phase</Link></li>
        <li><Link to="/defence-phase">Defence Phase</Link></li>
        <li><Link to="/evaluation-phase">Evaluation Phase</Link></li>
        <li><Link to="/sign-in">Sign In</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
