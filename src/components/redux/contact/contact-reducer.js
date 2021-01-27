import { combineReducers } from 'redux';
import actions from './contact-action';
import { fetchContact, addContact, deleteContact } from './contact-operations';

import { createReducer } from '@reduxjs/toolkit';

const contact = createReducer([], {
  [fetchContact.fulfilled]: (_, { payload }) => payload,
  [addContact.fulfilled]: (state, { payload }) => [...state, payload],
  [deleteContact.fulfilled]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});
const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});
const error = createReducer(null, {
  [fetchContact.rejected]: (_, { payload }) => payload,
  [fetchContact.pending]: () => null,
});

const loading = createReducer(false, {
  [fetchContact.pending]: () => true,
  [fetchContact.fulfilled]: () => false,
  [fetchContact.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [deleteContact.pending]: () => true,
  [deleteContact.fulfilled]: () => false,
  [deleteContact.rejected]: () => false,
});
export default combineReducers({
  contact,
  loading,
  filter,
  error,
});
