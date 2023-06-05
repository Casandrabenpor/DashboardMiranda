import { downloadBooking } from "./fileDownloadSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        status: "idle",
        data: [],
    },
    reducers: {

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
            })
            .addCase(editBooking.pending, (state) => {
                state.status = "loading";
            })
            .addCase(editBooking.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(editBooking.fulfilled, (state, action) => {
                state.status = "fulfilled";
                let index = state.data.findIndex(booking => booking.booking_id === action.payload.booking_id);
                state.data[index] = action.payload;
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