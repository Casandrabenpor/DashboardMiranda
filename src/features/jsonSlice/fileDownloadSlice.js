import { createAsyncThunk } from "@reduxjs/toolkit";

export const downloadFile = createAsyncThunk("data/download", async () => {
    return retrieveFile("mockUsers.json");
});

export const downloadRooms = createAsyncThunk("data/downloadRooms", async () => {
    return retrieveFile("mockRooms.json");
});


export const downloadContact = createAsyncThunk("data/downloadContact", async () => {
    return retrieveFile("mockContact.json");
});

export const downloadBooking = createAsyncThunk("data/downloadBooking", async () => {
    return retrieveFile("mockBooking.json");
});

async function retrieveFile(fileName) {
    const data = await fetch(`./mockData/${fileName}`)
        .catch((error) => {
            throw error;
        });

    const json = await data.json()
        .catch((error) => {
            throw error;
        });
    return json;
}