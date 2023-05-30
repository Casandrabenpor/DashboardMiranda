import { downloadFile, downloadRooms, downloadContact ,downloadBooking} from "./fileDownloadSlice";
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    userData: { status: "idle", data:[] },
    roomData: { status: "idle", data:[] },
    contactData: { status: "idle", data:[] },
    bookingData: { status: "idle", data:[] },
  },
  reducers: {

  },
  extraReducers: (buider) => {
    buider
      .addCase(downloadFile.pending, (state) => {
        state.userData.status = "loading";
      })
      .addCase(downloadFile.rejected, (state) => {
        state.userData.status = "failed";
      })
      .addCase(downloadFile.fulfilled, (state, action) => {
        state.userData.status = "fulfilled";
        state.userData.data = action.payload;
      })
      .addCase(downloadRooms.pending, (state) => {
        state.roomData.status = "loading";
      })
      .addCase(downloadRooms.rejected, (state) => {
        state.roomData.status = "failed";
      })
      .addCase(downloadRooms.fulfilled, (state, action) => {
        state.roomData.status = "fulfilled";
        state.roomData.data = action.payload;
      })
      .addCase(downloadContact.pending, (state) => {
        state.contactData.status = "loading";
      })
      .addCase(downloadContact.rejected, (state) => {
        state.contactData.status = "failed";
      })
      .addCase(downloadContact.fulfilled, (state, action) => {
        state.contactData.status = "fulfilled";
        state.contactData.data = action.payload;
      })
      .addCase(downloadBooking.pending, (state) => {
        state.bookingData.status = "loading";
      })
      .addCase(downloadBooking.rejected, (state) => {
        state.bookingData.status = "failed";
      })
      .addCase(downloadBooking.fulfilled, (state, action) => {
        state.bookingData.status = "fulfilled";
        state.bookingData.data = action.payload;
      });
  },
});