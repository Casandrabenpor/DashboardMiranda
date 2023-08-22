import { createAsyncThunk } from '@reduxjs/toolkit';
import { Person } from './Person';
import { CrossFetch } from '../../Api/Api';

export const downloadPeople = createAsyncThunk(
  'person/downloadPeople',
  async () => {
    return await CrossFetch('users', 'GET', null);
  },
);

export const createPerson = createAsyncThunk(
  'person/createPerson',
  async (newPerson: Person) => {
    let result = await CrossFetch('users', 'POST', newPerson);
    newPerson.id = result.id;
    return newPerson;
  },
);
export const deletePerson = createAsyncThunk(
  'person/deletePerson',
  async (user: Person) => {
    await CrossFetch(`users?id=${user.id}`, 'DELETE', null);
    return user;
  },
);
export const editPerson = createAsyncThunk(
  'person/editPerson',
  async (editedPeople: Person) => {
    await CrossFetch('users', 'PUT', editedPeople);
    return editedPeople;
  },
);
