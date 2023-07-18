import { createAsyncThunk } from '@reduxjs/toolkit';
import { Room } from './Room';
import { CrossFetch } from '../../Api/Api';

export const downloadRooms = createAsyncThunk(
  'room/downloadRooms',
  async () => {
    return CrossFetch('rooms', 'GET', null);
  },
);

export const createRoom = createAsyncThunk(
  'room/createRoom',
  async (newRoom: Room) => {
    return newRoom;
  },
);
export const deleteRoom = createAsyncThunk(
  'room/deleteRoom',
  async (room: Room) => {
    return room;
  },
);
export const editRoom = createAsyncThunk(
  'room/editRoom',
  async (editedRoom: Room) => {
    return editedRoom;
  },
);
