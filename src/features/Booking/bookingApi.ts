import { createAsyncThunk } from '@reduxjs/toolkit';
import { Booking } from './Booking';
import { CrossFetch } from '../../Api/Api';

export const downloadBooking = createAsyncThunk(
  'booking/downloadBooking',
  async () => {
    return await CrossFetch('bookings', 'GET', null);
  },
);
export const createBooking = createAsyncThunk(
  'booking/createBooking',
  async (newBooking: Booking) => {
    let result = await CrossFetch('bookings', 'POST', newBooking);
    newBooking.id = result.id;
    return newBooking;
  },
);
export const deleteBooking = createAsyncThunk(
  'booking/deleteBooking',
  async (booking: Booking) => {
    await CrossFetch(`bookings?id=${booking.id}`, 'DELETE', null);
    return booking;
  },
);
export const editBooking = createAsyncThunk(
  'booking/editBooking',
  async (editedBooking: Booking) => {
    console.log(editedBooking);
    await CrossFetch('bookings', 'PUT', editedBooking);
    return editedBooking;
  },
);
