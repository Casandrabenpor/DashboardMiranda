import {
  downloadPeople,
  editPerson,
  deletePerson,
  createPerson,
} from './userApi';
import { createSlice } from '@reduxjs/toolkit';
import { createDate } from '../Booking/dateReader';
import { Person } from './Person';
import { toast } from 'react-toastify';

const initialState = {
  status: 'idle',
  data: [] as Person[],
  filteredData: [] as Person[],
};
// type InitialState = typeof initialState;

export const personSlice = createSlice({
  name: 'person',
  initialState: initialState,
  reducers: {
    //SEARCH
    filterUsers: (state, action) => {
      const searchTerm = action.payload;
      if (searchTerm) {
        state.filteredData = state.data.filter((person) => {
          if (!person.name) {
            return false;
          }
          return person.name.toLowerCase().includes(searchTerm.toLowerCase());
        });
      } else {
        // Si no hay un término de búsqueda, mostramos todos los datos originales
        state.filteredData = state.data;
      }
    },
    //Filtrar users
    filteredAll: (state) => {
      // Filtra las habitaciones
      state.filteredData = state.data.filter(
        (person) => person.status === 'Inactive' || 'Active',
      );
    },
    filteredInactive: (state) => {
      // Filtra las habitaciones y actualiza el estado en función del estado "Available"
      state.filteredData = state.data.filter(
        (person) => person.status === 'Inactive',
      );
    },
    filteredActive: (state) => {
      // Filtra las habitaciones y actualiza el estado en función del estado "Occupied"
      state.filteredData = state.data.filter(
        (person) => person.status === 'Active',
      );
    },
    //ordenar, en select
    orderUsers: (state, action) => {
      let users = state.filteredData;
      if (action.payload === 'date') {
        state.filteredData = users.sort((current, next) => {
          let currentDate = createDate(current.startDate);
          let nextDate = createDate(next.startDate);
          return (currentDate?.getTime() ?? 0) - (nextDate?.getTime() ?? 0);
        });
      } else if (action.payload === 'name') {
        state.filteredData = users.sort((current, next) => {
          if (current.name < next.name) {
            return -1;
          }
          if (current.name > next.name) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(downloadPeople.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(downloadPeople.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(downloadPeople.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
        state.filteredData = state.data;
      })
      .addCase(createPerson.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPerson.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item created', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(createPerson.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data.push(action.payload);
        state.filteredData = state.data;
        toast.success('Item created', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(deletePerson.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deletePerson.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not deleted', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(deletePerson.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = state.data.filter((user) => user.id !== action.payload.id);
        state.filteredData = state.data;
        toast.success('Item deleted', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(editPerson.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editPerson.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(editPerson.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        let index = state.data.findIndex(
          (person) => person.id === action.payload.id,
        );
        state.data[index] = action.payload;
        state.filteredData = state.data;
      });
  },
});

export const {
  filterUsers,
  filteredActive,
  filteredAll,
  filteredInactive,
  orderUsers,
} = personSlice.actions;
