import { downloadPeople,editPerson,deletePerson,createPerson } from "./userApi";
import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    status: "idle",
    data: [],
    filteredData: [],
  },
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
    filteredAll: (state, action) => {
      // Filtra las habitaciones 
      state.filteredData = state.data.filter(person => person.status === 'inactive' || 'active');
    },
    filteredInactive: (state, action) => {
      // Filtra las habitaciones y actualiza el estado en función del estado "Available"
      state.filteredData = state.data.filter(person => person.status === 'inactive');
    },
    filteredActive: (state, action) => {
      // Filtra las habitaciones y actualiza el estado en función del estado "Occupied"
      state.filteredData = state.data.filter(person => person.status === 'active');
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(downloadPeople.pending, (state) => {
        state.status = "loading";
      })
      .addCase(downloadPeople.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(downloadPeople.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
        state.filteredData = state.data;
      })
      .addCase(createPerson.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createPerson.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(createPerson.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data.push(action.payload);
        state.filteredData = state.data;
      })
      .addCase(deletePerson.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePerson.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(deletePerson.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = state.data.filter(user =>
          user.id != action.payload.id);
        state.filteredData = state.data;
      })
      .addCase(editPerson.pending, (state) => {
        state.status = "loading";
      })
      .addCase(editPerson.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(editPerson.fulfilled, (state, action) => {
        state.status = "fulfilled";
        let index = state.data.findIndex(person => person.id === action.payload.id);
        state.data[index] = action.payload;
        state.filteredData = state.data;
      });
  },
});

export const { filterUsers, filteredActive, filteredAll, filteredInactive } = personSlice.actions;
