import { createAsyncThunk } from '@reduxjs/toolkit';
import { retrieveFile } from '../jsonSlice/fileDownloadSlice';
import { Contact } from './Contact';

export const downloadContact = createAsyncThunk(
  'contact/downloadContact',
  async (fileName: string) => {
    const response = await fetch(fileName);
    const data = await response.json();
    return data;
  },
);
// export const downloadContact = createAsyncThunk(
//   'contact/downloadContact',
//   async () => {
//     return retrieveFile('mockContact.json');
//   },
// );
export const createContact = createAsyncThunk(
  'contact/createContact',
  async (newContact: Contact) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return newContact;
  },
);
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contact: Contact) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return contact;
  },
);
export const editContact = createAsyncThunk(
  'contact/editContact',
  async (editedContact: Contact) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return editedContact;
  },
);
