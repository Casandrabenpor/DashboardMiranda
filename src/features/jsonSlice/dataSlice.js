import {downloadFile} from "./fileDownloadSlice";
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name:"data",
    initialState: {
        status:"idle",
        userData: [],
    },
    reducers: {

    },
    extraReducers: (buider) => {
        buider
          .addCase(downloadFile.pending, (state) => {
            state.status = "loading";
          })
          .addCase(downloadFile.rejected, (state) => {
            state.status = "failed";
          })
          .addCase(downloadFile.fulfilled, (state, action) => {
            state.status = "fulfilled";
            state.userData = action.payload;
          });
      },
});