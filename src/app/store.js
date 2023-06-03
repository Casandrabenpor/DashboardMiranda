import { configureStore } from '@reduxjs/toolkit';
import { sideBarSlice } from '../features/sideBarSlice';
import userReducer from '../features/loginSlice/userSlice';
import { personSlice } from '../features/jsonSlice/personSlice';
import {contactSlice} from '../features/jsonSlice/contactSlice';
import {bookingSlice} from '../features/jsonSlice/bookingSlice';
import {roomSlice} from '../features/jsonSlice/roomSlice';

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
