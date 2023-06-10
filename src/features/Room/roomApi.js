import { createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveFile } from "../jsonSlice/fileDownloadSlice";

export const downloadRooms = createAsyncThunk("room/downloadRooms", async () => {
    return retrieveFile("mockRooms.json");
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