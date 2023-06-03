import { downloadContact } from "./fileDownloadSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        status: "idle",
        data:[] ,
    },
    reducers: {
      
    },
    extraReducers: (buider) => {
        buider
        .addCase(downloadContact.pending, (state) => {
            state.status = "loading";
          })
          .addCase(downloadContact.rejected, (state) => {
            state.status = "failed";
          })
          .addCase(downloadContact.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = action.payload;
          })
          .addCase(createContact.pending, (state) => {
            state.status = "loading";
          })
          .addCase(createContact.rejected, (state) => {
            state.status = "failed";
          })
          .addCase(createContact.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data.push(action.payload);
          });
    },
});

export const createContact = createAsyncThunk("contact/createContact", async (newContact) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return newContact;
});
