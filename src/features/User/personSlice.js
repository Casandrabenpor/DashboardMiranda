import { downloadPeople } from "../jsonSlice/fileDownloadSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    status: "idle",
    data: [],
    filteredData: [],
  },
  reducers: {
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
      });
  },
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
export const { filterUsers } = personSlice.actions;