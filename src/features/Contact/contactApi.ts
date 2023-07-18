import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contact } from './Contact';
import { CrossFetch } from '../../Api/Api';

export const downloadContact = createAsyncThunk(
  'contact/downloadContact',
  async () => {
    return CrossFetch('contact', 'GET', null);
  },
);
export const createContact = createAsyncThunk(
  'contact/createContact',
  async (newContact: Contact) => {
    return newContact;
  },
);
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contact: Contact) => {
    return contact;
  },
);
export const editContact = createAsyncThunk(
  'contact/editContact',
  async (editedContact: Contact) => {
    return editedContact;
  },
);
