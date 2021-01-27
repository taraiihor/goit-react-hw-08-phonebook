import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(`/contacts`);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const addContact = createAsyncThunk(
  'contact/addContact',
  async ({ name, number }, { rejectWithValue }) => {
    const contact = { name, number };
    try {
      const { data } = await axios.post(`/contacts`, contact);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contactId, { rejectWithValue }) => {
    try {
      await axios.delete(`/contacts/${contactId}`);
      return contactId;
    } catch (error) {
      return rejectWithValue(error);
    }
  },
);
