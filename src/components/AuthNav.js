import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
    fontFamily: 'Roboto',
  },
  activeLink: {
    color: '#3700B3',
  },
};

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Sing up
    </NavLink>
    <NavLink
      to="/login"
      exact
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Sing in
    </NavLink>
  </div>
);

export default AuthNav;
