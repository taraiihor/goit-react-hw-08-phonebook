import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', credentials);
      token.set(response.data.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      token.unset();
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return error.rejectWithValue();
    }
  },
);


// export const register = credentials => async dispatch => {
//   dispatch(authActions.registerRequest());

//   try {
//     const response = await axios.post('/users/signup', credentials);

//     token.set(response.data.token);
//     dispatch(authActions.registerSuccess(response.data));
//   } catch (error) {
//     dispatch(authActions.registerError(error));
//   }
// };

// export const logIn = credentials => async dispatch => {
//   dispatch(authActions.loginRequest());

//   try {
//     const response = await axios.post('/users/login', credentials);
//     token.set(response.data.token);
//     dispatch(authActions.loginSuccess(response.data));
//   } catch (error) {
//     dispatch(authActions.loginError(error));
//   }
// };

// export const logOut = () => async dispatch => {
//   dispatch(authActions.logoutRequest());

//   try {
//     await axios.post('/users/logout');
//     token.unset();
//     dispatch(authActions.logoutSuccess());
//   } catch (error) {
//     console.log(error);
//     dispatch(authActions.logoutError(error));
//   }
// };

// export const getCurrentUser = () => async (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();
//   if (!persistedToken) {
//     return;
//   }

//   token.set(persistedToken);
//   dispatch(authActions.getCurrentUserRequest());
//   try {
//     const response = await axios.get('/users/current');
//     dispatch(authActions.getCurrentUserSuccess(response.data));
//   } catch (error) {
//     dispatch(authActions.getCurrentUserError(error));
//   }
// };
