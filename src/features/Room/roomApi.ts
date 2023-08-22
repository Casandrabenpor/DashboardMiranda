import { createAsyncThunk } from '@reduxjs/toolkit';
import { Room } from './Room';
import { CrossFetch } from '../../Api/Api';

export const downloadRooms = createAsyncThunk(
  'room/downloadRooms',
  async () => {
    return await CrossFetch('rooms', 'GET', null);
  },
);

export const createRoom = createAsyncThunk(
  'room/createRoom',
  async (newRoom: Room) => {
    let result = await CrossFetch('rooms', 'POST', newRoom);
    newRoom.room_id = result.room_id;
    return newRoom;
  },
);
export const deleteRoom = createAsyncThunk(
  'room/deleteRoom',
  async (room: Room) => {
    await CrossFetch(`rooms?id=${room.room_id}`, 'DELETE', null);

    // throw new Error('Error');

    return room;
  },
);
export const editRoom = createAsyncThunk(
  'room/editRoom',
  async (editedRoom: Room) => {
    await CrossFetch('rooms', 'PUT', editedRoom);
    return editedRoom;
  },
);
