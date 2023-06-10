import { createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveFile } from "../jsonSlice/fileDownloadSlice";

export const downloadContact = createAsyncThunk("contact/downloadContact", async () => {
    return retrieveFile("mockContact.json");
});
export const createContact = createAsyncThunk("contact/createContact", async (newContact) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return newContact;
});
export const deleteContact = createAsyncThunk("contact/deleteContact", async (contact) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return contact;
});
export const editContact = createAsyncThunk("contact/editContact", async (editedContact) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return editedContact;
});