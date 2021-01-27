import { combineReducers, createReducer } from '@reduxjs/toolkit';
// import actionsStatus from './auth-actions';
import { register, logIn, logOut, getCurrentUser } from './auth-operations';

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
  [register.fulfilled]: (_, { payload }) => payload.user,
  [logIn.fulfilled]: (_, { payload }) => payload.user,
  [logOut.fulfilled]: () => initialUserState,
  [getCurrentUser.fulfilled]: (_, { payload }) => payload,
  // [actionsStatus.registerSuccess]: (_, { payload }) => payload.user,
  // [actionsStatus.loginSuccess]: (_, { payload }) => payload.user,
  // [actionsStatus.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [register.fulfilled]: (_, { payload }) => payload.token,
  [logIn.fulfilled]: (_, { payload }) => payload.token,
  [logOut.fulfilled]: () => null,
  // [actionsStatus.registerSuccess]: (_, { payload }) => payload.token,
  // [actionsStatus.loginSuccess]: (_, { payload }) => payload.token,
  // [actionsStatus.logoutSuccess]: () => null,
});
const setError = (_, { payload }) => payload;

const error = createReducer(null, {
  [register.rejected]: setError,
  [logIn.rejected]: setError,
  [logOut.rejected]: setError,
  [getCurrentUser.rejected]: setError,
  // [actionsStatus.registerError]: setError,
  // [actionsStatus.loginError]: setError,
  // [actionsStatus.logoutError]: setError,
  // [actionsStatus.getCurrentUserError]: setError,
});
const isAuthenticated = createReducer(false, {
  [register.fulfilled]: () => true,
  [register.rejected]: () => false,
  [logIn.fulfilled]: () => true,
  [logIn.rejected]: () => false,
  [logOut.fulfilled]: () => false,
  [getCurrentUser.fulfilled]: () => true,
  [getCurrentUser.rejected]: () => false,
  // [actionsStatus.registerSuccess]: () => true,
  // [actionsStatus.loginSuccess]: () => true,
  // [actionsStatus.getCurrentUserSuccess]: () => true,
  // [actionsStatus.registerError]: () => false,
  // [actionsStatus.loginError]: () => false,
  // [actionsStatus.getCurrentUserError]: () => false,
  // [actionsStatus.logoutSuccess]: () => false,
});

export default combineReducers({
  user,
  token,
  error,
  isAuthenticated,
});
