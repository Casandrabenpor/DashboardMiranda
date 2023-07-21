import { toast } from 'react-toastify';
import { Contact } from './Contact';
import {
  downloadContact,
  editContact,
  deleteContact,
  createContact,
} from './contactApi';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  data: [] as Contact[],
  filteredData: [] as Contact[],
  archivedData: [] as Contact[],
  archiveView: false,
};
// type InitialState = typeof initialState;
export const contactSlice = createSlice({
  name: 'contact',
  initialState: initialState,

  reducers: {
    filterContacts: (state, action) => {
      const searchTerm = action.payload;
      if (searchTerm) {
        state.filteredData = state.data.filter((contact) => {
          if (!contact.customer) {
            return false;
          }
          return contact.customer
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        });
      } else {
        // Si no hay un término de búsqueda, mostramos todos los datos originales
        state.filteredData = state.data;
      }
    },
    archiveContacts: (state, action) => {
      state.data = state.data.filter(
        (contact) => contact.contact_id !== action.payload.contact_id,
      );
      state.filteredData = state.data;
      state.archivedData.push(action.payload);
      toast.success('Item archived', {
        position: toast.POSITION.TOP_RIGHT,
      });
    },
    enableArchiveView: (state) => {
      state.archiveView = true;
    },
    enableAllView: (state) => {
      state.archiveView = false;
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(downloadContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(downloadContact.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(downloadContact.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
        state.filteredData = state.data;
      })
      .addCase(createContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createContact.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not created', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data.push(action.payload);
        state.filteredData = state.data;
        toast.success('Item created', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(deleteContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteContact.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not deleted', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = state.data.filter(
          (contact) => contact.contact_id !== action.payload.contact_id,
        );
        state.filteredData = state.data;
        toast.success('Item deleted', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(editContact.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editContact.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        let index = state.data.findIndex(
          (contact) => contact.contact_id === action.payload.contact_id,
        );
        state.data[index] = action.payload;
        state.filteredData = state.data;
      });
  },
});

export const {
  filterContacts,
  archiveContacts,
  enableAllView,
  enableArchiveView,
} = contactSlice.actions;
