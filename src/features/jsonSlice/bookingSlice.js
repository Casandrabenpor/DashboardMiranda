import { downloadBooking } from "./fileDownloadSlice";
import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const bookingSlice = createSlice({
    name: "booking",
    initialState: {
        status: "idle", 
        data: [] ,
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
    },
});
export const createBooking = createAsyncThunk("room/createRoom", async (newBooking) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return newBooking;
});