import { createAsyncThunk } from '@reduxjs/toolkit';
import { Contact } from './Contact';
import { CrossFetch } from '../../Api/Api';

export const downloadContact = createAsyncThunk(
  'contact/downloadContact',
  async () => {
    return await CrossFetch('contact', 'GET', null);
  },
);
export const createContact = createAsyncThunk(
  'contact/createContact',
  async (newContact: Contact) => {
    let result = await CrossFetch('contact', 'POST', newContact);
    newContact.contact_id = result.contact_id;
    return newContact;
  },
);
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contact: Contact) => {
    await CrossFetch(`contact?id=${contact.contact_id}`, 'DELETE', null);
    return contact;
  },
);
export const editContact = createAsyncThunk(
  'contact/editContact',
  async (editedContact: Contact) => {
    await CrossFetch('contact', 'PUT', editedContact);
    return editedContact;
  },
);
