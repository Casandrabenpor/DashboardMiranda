import { downloadFile, downloadRooms } from "./fileDownloadSlice";
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    status: "idle",
    userData: [],
    roomData: [],
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
      })
      .addCase(downloadRooms.pending, (state) => {
        state.status = "loading";
      })
      .addCase(downloadRooms.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(downloadRooms.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.roomData = action.payload;
      });
  },
});