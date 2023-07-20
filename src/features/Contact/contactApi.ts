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
    let result = await CrossFetch('contact', 'POST', newContact);
    newContact.order_id = result.order_id;
    return newContact;
  },
);
export const deleteContact = createAsyncThunk(
  'contact/deleteContact',
  async (contact: Contact) => {
    console.log(contact);
    await CrossFetch(`contact?id=${contact.order_id}`, 'DELETE', null);
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
