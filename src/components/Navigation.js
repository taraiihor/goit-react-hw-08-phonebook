import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getIsAuthenticated } from './redux/auth/auth-selectors';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#3700B3',
  },
};

function Navigation() {
  const isLoading = useSelector(getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}>
        Home
      </NavLink>
      {isLoading && (
        <NavLink
          to="/contacts"
          exact
          style={styles.link}
          activeStyle={styles.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}

export default Navigation;
