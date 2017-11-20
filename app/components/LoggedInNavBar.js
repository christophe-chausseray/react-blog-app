import React from 'react';
import { NavLink } from 'react-router-dom';

const LoggedInNavBar = props => (
  <ul className="nav navbar-nav navbar-right">
    <li className="nav-item">
      <NavLink to="/">Home</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/editor">New post</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/" onClick={props.onClick}>Logout</NavLink>
    </li>
  </ul>
);

export default LoggedInNavBar;
