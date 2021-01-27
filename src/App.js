// import ContactsList from './components/Contact/';
// import ContactForm from './components/Form/';
// import Filter from './components/Filter/';
import './App.css';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
// import HomePage from './components/views/HomePage';
import RegisterView from './components/views/RegisterView';
import LoginView from './components/views/LoginView';
import ContactView from './components/views/ContactView';
// import { authOperations } from './redux/auth';
// import { connect } from 'react-redux';
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
        <PublicRoute path="/register" restricted redirectTo="/contacts">
          <RegisterView />
        </PublicRoute>

        <PublicRoute path="/login" restricted redirectTo="/contacts">
          <LoginView />
        </PublicRoute>
        {/* <Route path="/register" component={RegisterView} /> */}
        {/* <Route path="/login" component={LoginView} /> */}
        {/* <Route path="/contacts" component={ContactView} /> */}
        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactView />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
