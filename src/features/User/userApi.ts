import { createAsyncThunk } from '@reduxjs/toolkit';
import { Person } from './Person';
import { CrossFetch } from '../../Api/Api';

export const downloadPeople = createAsyncThunk(
  'person/downloadPeople',
  async () => {
    return CrossFetch('users', 'GET', null);
  },
);

export const createPerson = createAsyncThunk(
  'person/createPerson',
  async (newPerson: Person) => {
    return newPerson;
  },
);
export const deletePerson = createAsyncThunk(
  'person/deletePerson',
  async (user: Person) => {
    return user;
  },
);
export const editPerson = createAsyncThunk(
  'person/editPerson',
  async (editedPeople: Person) => {
    return editedPeople;
  },
);
