import { downloadBooking } from "./fileDownloadSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        status: "idle",
        data: [],
        filteredData: []
    },
    //Search
    reducers: {
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
        //Para ordenar date,guest,check in y check out
        orderBookings: (state, action) => {
            let bookings = state.filteredData;
            if (action.payload === "date") {
                state.filteredData = bookings.sort(
                    (current, next) => {
                        let currentDate = createDateFromString(current.date);
                        let nextDate = createDateFromString(next.date);
                        return currentDate - nextDate;
                    }
                )
            }
        }

    },
    extraReducers: (buider) => {
        buider
            .addCase(downloadBooking.pending, (state) => {
                state.status = "loading";
            })
            .addCase(downloadBooking.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(downloadBooking.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data = action.payload;
                state.filteredData = state.data;
            })
            .addCase(createBooking.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createBooking.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.push(action.payload);

                state.filteredData = state.data;
            })
            .addCase(deleteBooking.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteBooking.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data = state.data.filter(booking =>
                    booking.id != action.payload.id);

                state.filteredData = state.data;
            })
            .addCase(editBooking.pending, (state) => {
                state.status = "loading";
            })
            .addCase(editBooking.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(editBooking.fulfilled, (state, action) => {
                state.status = "fulfilled";
                let index = state.data.findIndex(booking => booking.id === action.payload.id);
                state.data[index] = action.payload;

                state.filteredData = state.data;
            });
    },
});
export const createBooking = createAsyncThunk("booking/createBooking", async (newBooking) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return newBooking;
});
export const deleteBooking = createAsyncThunk("booking/deleteBooking", async (booking) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return booking;
});
export const editBooking = createAsyncThunk("booking/editBooking", async (editedBooking) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return editedBooking;
});
//función para ordenar los dias,meses y años en js

  
  // Nota: En JavaScript, los meses empiezan en 0 (enero es el mes 0)
  function createDateFromString(dateString) {
    if (!dateString) {
      return null; // Manejar el caso de valor indefinido o vacío según tus necesidades
    }
    
    const dateTimeParts = dateString.split("T");
    const dateParts = dateTimeParts[0].split("-");
    const timeParts = dateTimeParts[1].split(":");
    
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);
    const hour = parseInt(timeParts[0]);
    const minute = parseInt(timeParts[1]);
    
    const date = new Date(year, month, day, hour, minute);
    
    return date;
  }
  
export const { filterBookings,orderBookings } = bookingSlice.actions;