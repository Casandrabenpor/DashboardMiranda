import { createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveFile } from "../jsonSlice/fileDownloadSlice";

export const downloadPeople= createAsyncThunk("person/downloadPeople", async () => {
    return retrieveFile("mockUsers.json");
});
export const createPerson = createAsyncThunk("person/createPerson", async (newPerson) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return newPerson;
  });
  export const deletePerson = createAsyncThunk("person/deletePerson", async (user) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return user;
  });
  export const editPerson = createAsyncThunk("person/editPerson", async (editedPeople) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return editedPeople;
  });