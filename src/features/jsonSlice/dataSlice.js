import { downloadFile, downloadRooms, downloadContact ,downloadBooking} from "./fileDownloadSlice";
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    status: "idle",
    userData: [],
    roomData: [],
    contactData:[],
    bookingData:[],
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
      })
      .addCase(downloadContact.pending, (state) => {
        state.status = "loading";
      })
      .addCase(downloadContact.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(downloadContact.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.contactData = action.payload;
      })
      .addCase(downloadBooking.pending, (state) => {
        state.status = "loading";
      })
      .addCase(downloadBooking.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(downloadBooking.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.bookingData = action.payload;
      });
  },
});