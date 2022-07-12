import React from 'react';
import {NavLink} from "react-router-dom";
import './NavBar.scss'

const Navigation = () => {
  return (
    <header className="navigation">
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/history">History</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
