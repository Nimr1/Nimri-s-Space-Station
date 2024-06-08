import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact>Home</NavLink></li>
        <li><NavLink to="/defence">Defence Phase</NavLink></li>
        <li><NavLink to="/deposit-funds">Deposit Funds</NavLink></li>
        <li><NavLink to="/evaluation">Evaluation Phase</NavLink></li>
        <li><NavLink to="/history">History</NavLink></li>
        <li><NavLink to="/leaderboard">Leaderboard</NavLink></li>
        <li><NavLink to="/preparation">Preparation Phase</NavLink></li>
        <li><NavLink to="/resource-management">Resource Management</NavLink></li>
        <li><NavLink to="/game">Game</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
