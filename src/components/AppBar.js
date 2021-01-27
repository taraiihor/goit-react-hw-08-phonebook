import React from 'react';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import AuthNav from './AuthNav';
import { getIsAuthenticated } from './redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

function AppBar() {
  const isAuthenticated = useSelector(getIsAuthenticated);

  return (
    <>
      <header style={styles.header}>
        <Navigation />
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>
    </>
  );
}

export default AppBar;
