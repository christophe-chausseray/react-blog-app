import React from 'react';
import { NavLink } from 'react-router-dom';
import LoggedInNavBar from 'components/LoggedInNavBar';
import LoggedOutNavBar from 'components/LoggedOutNavBar';

const Header = props => {
  let navBar = null;
  if (window.localStorage.authorization) {
    navBar = <LoggedInNavBar onClick={props.onClick} />;
  } else {
    navBar = <LoggedOutNavBar />;
  }

  return (
    <nav className="navbar navbar-default nav-color">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink to="/" className="navbar-brand">
            BlogApp
          </NavLink>
        </div>

        {navBar}
      </div>
    </nav>
)};

export default Header;
