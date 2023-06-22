import { createAsyncThunk } from '@reduxjs/toolkit';
import { retrieveFile } from '../jsonSlice/fileDownloadSlice';
import { Room } from './Room';

export const downloadRooms = createAsyncThunk(
  'room/downloadRooms',
  async (fileName: string) => {
    const response = await fetch(fileName);
    const data = await response.json();
    return data;
  },
);
// export const downloadRooms = createAsyncThunk(
//   'room/downloadRooms',
//   async () => {
//     return retrieveFile('mockRooms.json');
//   },
// );

export const createRoom = createAsyncThunk(
  'room/createRoom',
  async (newRoom: Room) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return newRoom;
  },
);
export const deleteRoom = createAsyncThunk(
  'room/deleteRoom',
  async (room: Room) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return room;
  },
);
export const editRoom = createAsyncThunk(
  'room/editRoom',
  async (editedRoom: Room) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    return editedRoom;
  },
);
