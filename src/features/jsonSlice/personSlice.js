import { downloadPeople } from "./fileDownloadSlice";
import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";

export const personSlice = createSlice({
  name: "person",
  initialState: {
    status: "idle",
    data: []
  },
  reducers: {

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
  },
});
export const createPerson = createAsyncThunk("person/createPerson", async (newPerson) => {
  await new Promise(resolve => setTimeout(resolve, 200));
  return newPerson;
});