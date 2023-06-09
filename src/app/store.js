import { configureStore } from '@reduxjs/toolkit';
import { sideBarSlice } from '../features/sideBarSlice';
import userReducer from '../features/loginSlice/userSlice';
import { personSlice } from '../features/User/personSlice';
import {contactSlice} from '../features/Contact/contactSlice';
import {bookingSlice} from '../features/Booking/bookingSlice';
import {roomSlice} from '../features/Room/roomSlice';

export const store = configureStore({
  reducer: {
    sidebar: sideBarSlice.reducer,
    room: roomSlice.reducer,
    booking: bookingSlice.reducer,
    person: personSlice.reducer,
    contact: contactSlice.reducer,
    user: userReducer,
  },
});
