import { configureStore } from '@reduxjs/toolkit';
import { sideBarSlice } from '../features/sideBarSlice';

export const store = configureStore({
  reducer: {
    sidebar: sideBarSlice.reducer,
  },
});
