import { downloadContact } from "../jsonSlice/fileDownloadSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
    name: "contact",
    initialState: {
        status: "idle",
        data:[] ,
        filteredData: [],
    },
    reducers: {
      filterContacts: (state, action) => {
        const searchTerm = action.payload;
        if (searchTerm) {
            state.filteredData = state.data.filter((contact) => {
                if (!contact.customer) {
                    return false;
                }
                return contact.customer.toLowerCase().includes(searchTerm.toLowerCase());
            });
        } else {
            // Si no hay un término de búsqueda, mostramos todos los datos originales
            state.filteredData = state.data;

        }
    },
      
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
            state.filteredData = state.data;
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
          })
          .addCase(deleteContact.pending, (state) => {
            state.status = "loading";
        })
        .addCase(deleteContact.rejected, (state) => {
            state.status = "failed";
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.data = state.data.filter(contact =>
                contact.order_id != action.payload.order_id);
        })
        .addCase(editContact.pending, (state) => {
          state.status = "loading";
        })
        .addCase(editContact.rejected, (state) => {
          state.status = "failed";
        })
        .addCase(editContact.fulfilled, (state, action) => {
          state.status = "fulfilled";
          let index = state.data.findIndex(contact => contact.order_id === action.payload.order_id);
          state.data[index] = action.payload;
        });
    },
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
export const {filterContacts} = contactSlice.actions;