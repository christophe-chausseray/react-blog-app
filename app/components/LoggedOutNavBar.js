import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedOutNavBar = () => (
  <ul className="nav navbar-nav navbar-right">
    <li className="nav-item">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/login">Sign in</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/register">Sign up</NavLink>
    </li>
  </ul>
);

export default LoggedOutNavBar;
