import { configureStore } from '@reduxjs/toolkit';
import { sideBarSlice } from '../features/sideBarSlice';
import { dataSlice } from '../features/jsonSlice/dataSlice';

export const store = configureStore({
  reducer: {
    sidebar: sideBarSlice.reducer,
    data: dataSlice.reducer,
  },
});
