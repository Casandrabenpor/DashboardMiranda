import { downloadRooms } from "../jsonSlice/fileDownloadSlice";
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
            })
            .addCase(deleteRoom.pending, (state) => {
                state.status = "loading";
            })
            .addCase(deleteRoom.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.status = "fulfilled";
                state.data = state.data.filter(room =>
                    room.room_id != action.payload.room_id);
            })
            .addCase(editRoom.pending, (state) => {
                state.status = "loading";
            })
            .addCase(editRoom.rejected, (state) => {
                state.status = "failed";
            })
            .addCase(editRoom.fulfilled, (state, action) => {
                state.status = "fulfilled";
                let index = state.data.findIndex(room => room.room_id === action.payload.room_id);
                state.data[index] = action.payload;
            });
    },
});

export const createRoom = createAsyncThunk("room/createRoom", async (newRoom) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return newRoom;
});
export const deleteRoom = createAsyncThunk("room/deleteRoom", async (room) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return room;
});
export const editRoom = createAsyncThunk("room/editRoom", async (editedRoom) => {
    await new Promise(resolve => setTimeout(resolve, 200));
    return editedRoom;
});