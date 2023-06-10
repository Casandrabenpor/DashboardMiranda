import { downloadContact, editContact, deleteContact, createContact } from "./contactApi";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const contactSlice = createSlice({
  name: "contact",
  initialState: {
    status: "idle",
    data: [],
    filteredData: [],
    archivedData: [],
    archiveView: false
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
    archiveContacts: (state, action) => {
      state.data = state.data.filter(contact =>
        contact.order_id !== action.payload.order_id);
      state.filteredData = state.data;
      state.archivedData.push(action.payload);
    },
    enableArchiveView:(state,action) =>{
      state.archiveView = true;
    },
    enableAllView:(state,action) =>{
      state.archiveView = false;
    }

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
        state.filteredData = state.data;
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
          contact.order_id !== action.payload.order_id);
        state.filteredData = state.data;
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
        state.filteredData = state.data;
      });
  },
});


export const { filterContacts, archiveContacts,enableAllView,enableArchiveView } = contactSlice.actions;