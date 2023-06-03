import { downloadPeople } from "./fileDownloadSlice";
import { createSlice } from "@reduxjs/toolkit";

export const personSlice = createSlice({
    name: "person",
    initialState: {
        status: "idle", 
        data:[] 
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
          });
    },
});