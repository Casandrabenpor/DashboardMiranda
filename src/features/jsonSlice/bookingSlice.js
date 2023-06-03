import { downloadBooking } from "./fileDownloadSlice";
import { createSlice } from "@reduxjs/toolkit";

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
            });
    },
});