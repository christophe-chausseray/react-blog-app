import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return(
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink to="/" className="navbar-brand">
              BlogApp
            </NavLink>
          </div>

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
        </div>
      </nav>
    );
  }
}

export default Header;
