import { createAsyncThunk } from '@reduxjs/toolkit';
import { retrieveFile } from '../jsonSlice/fileDownloadSlice';
import { Booking } from './Booking';

export const downloadBooking = createAsyncThunk(
  'booking/downloadBooking',
  async () => {
    return retrieveFile('mockBooking.json');
  },
);
export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async (newBooking: Booking) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return newBooking;
  },
);
export const deleteBooking = createAsyncThunk(
  'booking/deleteBooking',
  async (booking: Booking) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return booking;
  },
);
export const editBooking = createAsyncThunk(
  'booking/editBooking',
  async (editedBooking: Booking) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return editedBooking;
  },
);
