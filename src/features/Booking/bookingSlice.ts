import {
  downloadBooking,
  createBooking,
  editBooking,
  deleteBooking,
} from './bookingApi';
import { createSlice } from '@reduxjs/toolkit';
import { createDateFromString, createDateWithTime } from './dateReader';
import { Booking } from './Booking';
// 3 tipos para hacer
// Interface
// interface  InitialState  {
//   status: string;
//   data: Booking[];
//   filteredData: Booking[];
// };
// const initialState: InitialState = {
//   status: 'idle',
//   data: [],
//   filteredData: [],
// };
// TYPE
// type InitialState = {
//   status: string;
//   data: Booking[];
//   filteredData: Booking[];
// };
// const initialState: InitialState = {
//   status: 'idle',
//   data: [],
//   filteredData: [],
// };
// Type inferido
const initialState = {
  status: 'idle',
  data: [] as Booking[],
  filteredData: [] as Booking[],
};
// type InitialState = typeof initialState;

export const bookingSlice = createSlice({
  name: 'booking',
  initialState: initialState,
  reducers: {
    //Search
    filterBookings: (state, action) => {
      const searchTerm = action.payload;
      if (searchTerm) {
        state.filteredData = state.data.filter((booking) => {
          if (!booking.guest) {
            return false;
          }
          return booking.guest.toLowerCase().includes(searchTerm.toLowerCase());
        });
      } else {
        // Si no hay un término de búsqueda, mostramos todos los datos originales
        state.filteredData = state.data;
      }
    },
    // TABS BOOKING, FILTRAR POR all booking, checking,checkout o in progress
    filteredAll: (state) => {
      // Filtra los status
      state.filteredData = state.data.filter(
        (booking) =>
          booking.status === 'Check in' || 'Check out' || 'In Progress',
      );
    },
    filteredChecking: (state) => {
      // Filtra checkin
      state.filteredData = state.data.filter(
        (booking) => booking.status === 'Check In',
      );
    },
    filteredCheckout: (state) => {
      // Filtra checkout
      state.filteredData = state.data.filter(
        (booking) => booking.status === 'Check Out',
      );
    },
    filteredInProgress: (state) => {
      // Filtra inProgress
      state.filteredData = state.data.filter(
        (booking) => booking.status === 'In Progress',
      );
    },
    //ordenar, en select
    orderBookings: (state, action) => {
      let bookings = state.filteredData;
      if (action.payload === 'date') {
        state.filteredData = bookings.sort((current, next) => {
          let currentDate = createDateFromString(current.order_date);
          let nextDate = createDateFromString(next.order_date);

          return Number(currentDate) - Number(nextDate);
        });
      } else if (action.payload === 'guest') {
        state.filteredData = bookings.sort((current, next) => {
          if (current.guest < next.guest) {
            return -1;
          }
          if (current.guest > next.guest) {
            return 1;
          }
          return 0;
        });
      } else if (action.payload === 'check_in') {
        state.filteredData = bookings.sort((current, next) => {
          let currentDate = createDateWithTime(
            current.check_in,
            current.check_in_hour,
          );
          let nextDate = createDateWithTime(next.check_in, next.check_in_hour);

          return Number(currentDate) - Number(nextDate);
        });
      } else if (action.payload === 'check_out') {
        state.filteredData = bookings.sort((current, next) => {
          let currentDate = createDateWithTime(
            current.check_out,
            current.check_out_hour,
          );
          let nextDate = createDateWithTime(
            next.check_out,
            next.check_out_hour,
          );

          return Number(currentDate) - Number(nextDate);
        });
      }
    },
  },
  //Para ordenar date,guest,check in y check out
  extraReducers: (buider) => {
    buider
      .addCase(downloadBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(downloadBooking.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(downloadBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = action.payload;
        state.filteredData = state.data;
      })
      .addCase(createBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBooking.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(createBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data.push(action.payload);

        state.filteredData = state.data;
      })
      .addCase(deleteBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBooking.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.data = state.data.filter(
          (booking) => booking.id !== action.payload.id,
        );
        state.filteredData = state.data;
      })
      .addCase(editBooking.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(editBooking.rejected, (state) => {
        state.status = 'failed';
      })
      .addCase(editBooking.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        let index = state.data.findIndex(
          (booking) => booking.id === action.payload.id,
        );
        state.data[index] = action.payload;

        state.filteredData = state.data;
      });
  },
});

export const {
  filterBookings,
  orderBookings,
  filteredAll,
  filteredChecking,
  filteredCheckout,
  filteredInProgress,
} = bookingSlice.actions;
