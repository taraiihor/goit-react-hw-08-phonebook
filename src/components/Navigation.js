import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from './redux/auth/auth-selectors';

function Navigation() {
  const isLoading = useSelector(getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact className="navLink">
        Home
      </NavLink>
      {isLoading && (
        <NavLink to="/contacts" exact className="navLink">
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
