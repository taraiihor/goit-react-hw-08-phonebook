import React from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from './redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <>
      <header className="heder__styles">
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
}

export default AppBar;
