import { createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveFile } from "../jsonSlice/fileDownloadSlice";

export const downloadBooking = createAsyncThunk("booking/downloadBooking", async () => {
    return retrieveFile("mockBooking.json");
});
export const createBooking = createAsyncThunk("booking/createBooking", async (newBooking) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return newBooking;
});
export const deleteBooking = createAsyncThunk("booking/deleteBooking", async (booking) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return booking;
});
export const editBooking = createAsyncThunk("booking/editBooking", async (editedBooking) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return editedBooking;
});