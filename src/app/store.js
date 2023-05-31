import { configureStore } from '@reduxjs/toolkit';
import { sideBarSlice } from '../features/sideBarSlice';
import { dataSlice } from '../features/jsonSlice/dataSlice';
import userReducer from '../features/loginSlice/userSlice';

export const store = configureStore({
  reducer: {
    sidebar: sideBarSlice.reducer,
    data: dataSlice.reducer,
    user: userReducer,
  },
});
