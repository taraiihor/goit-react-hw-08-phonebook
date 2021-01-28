import './App.css';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
import RegisterView from './components/views/RegisterView';
import LoginView from './components/views/LoginView';
import ContactView from './components/views/ContactView';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import HomeView from './components/views/HomePage';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './components/redux/auth/auth-operations';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(getCurrentUser()), [dispatch]); // dispatch як залежність.
  return (
    <div className="Containet">
      <AppBar />

      <Switch>
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>
        <PublicRoute path="/register" redirectTo="/contacts" restricted>
          <RegisterView />
        </PublicRoute>

        <PublicRoute path="/login" redirectTo="/contacts" restricted>
          <LoginView />
        </PublicRoute>

        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactView />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
