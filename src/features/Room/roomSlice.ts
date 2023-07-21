import { toast } from 'react-toastify';
import { Room } from './Room';
import { downloadRooms, createRoom, deleteRoom, editRoom } from './roomApi';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'idle',
  data: [] as Room[],
  filteredData: [] as Room[],
};
// type InitialState = typeof initialState;
export const roomSlice = createSlice({
  name: 'room',
  initialState: initialState,
  reducers: {
    filteredAll: (state) => {
      // Filtra las habitaciones
      state.filteredData = state.data.filter(
        (room) => room.status === 'Available' || 'Occupied',
      );
    },
    filteredAvailable: (state) => {
      // Filtra las habitaciones y actualiza el estado en función del estado "Available"
      state.filteredData = state.data.filter(
        (room) => room.status === 'Available',
      );
    },
    filteredOccupied: (state) => {
      // Filtra las habitaciones y actualiza el estado en función del estado "Occupied"
      state.filteredData = state.data.filter(
        (room) => room.status === 'Occupied',
      );
    },
  },

  extraReducers: (buider) => {
    buider
      .addCase(downloadRooms.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(downloadRooms.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(downloadRooms.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
        state.filteredData = state.data;
      })
      .addCase(createRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createRoom.rejected, (state) => {
        state.status = 'failed';
        toast.error('Item not created', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(createRoom.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data.push(action.payload);
        state.filteredData = state.data;
        toast.success('Item created', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(deleteRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteRoom.rejected, (state) => {
        state.status = 'failed';

        toast.error('Item not deleted', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = state.data.filter(
          (room) => room.room_id !== action.payload.room_id,
        );
        state.filteredData = state.data;

        toast.success('Item deleted', {
          position: toast.POSITION.TOP_RIGHT,
        });
      })
      .addCase(editRoom.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editRoom.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(editRoom.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        let index = state.data.findIndex(
          (room) => room.room_id === action.payload.room_id,
        );
        state.data[index] = action.payload;
        state.filteredData = state.data;
      });
  },
});

export const { filteredAll, filteredAvailable, filteredOccupied } =
  roomSlice.actions;
