import React from 'react';
import { NavLink } from 'react-router-dom';

const AuthNav = () => (
  <div>
    <NavLink to="/register" exact className="navLink">
      Sing up
    </NavLink>
    <NavLink to="/login" exact className="navLink">
      Sing in
    </NavLink>
  </div>
);

export default AuthNav;
