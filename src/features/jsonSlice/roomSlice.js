import { downloadRooms } from "./fileDownloadSlice";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const roomSlice = createSlice({
    name: "room",
    initialState: {
        status: "idle",
        data: [],
    },
    reducers: {

    },
    extraReducers: (buider) => {
        buider
            .addCase(downloadRooms.pending, (state) => {
                state.status = "loading";
            })
            .addCase(downloadRooms.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(downloadRooms.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data = action.payload;
            })
            .addCase(createRoom.pending, (state) => {
                state.status = "loading";
            })
            .addCase(createRoom.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(createRoom.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data.push(action.payload);
            });
    },
});

export const createRoom = createAsyncThunk("room/createRoom", async (newRoom) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return newRoom;
});
