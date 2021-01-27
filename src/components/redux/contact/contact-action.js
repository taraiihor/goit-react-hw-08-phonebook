import { createAction } from '@reduxjs/toolkit';

// // fetchContact.pending
// const fetchContactRequest = createAction('contact/fetchContactRequest');
// // fetchContact.fulfilled;
// const fetchContactSuccess = createAction('contact/fetchContactSuccess');
// // fetchContact.rejected;
// const fetchContactError = createAction('contact/fetchContactError');

const changeFilter = createAction('contact/changeFilter');

const actions = {
  changeFilter,
};
export default actions;
