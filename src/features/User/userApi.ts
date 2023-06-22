import { createAsyncThunk } from '@reduxjs/toolkit';
import { retrieveFile } from '../jsonSlice/fileDownloadSlice';
import { Person } from './Person';

export const downloadPeople = createAsyncThunk(
  'person/downloadPeople',
  async () => {
    const data = await retrieveFile('mockUsers.json');
    return data;
  },
);

export const createPerson = createAsyncThunk(
  'person/createPerson',
  async (newPerson: Person) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return newPerson;
  },
);
export const deletePerson = createAsyncThunk(
  'person/deletePerson',
  async (user: Person) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return user;
  },
);
export const editPerson = createAsyncThunk(
  'person/editPerson',
  async (editedPeople: Person) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return editedPeople;
  },
);
