import { createAsyncThunk } from "@reduxjs/toolkit";

export const downloadPeople= createAsyncThunk("person/downloadPeople", async () => {
    return retrieveFile("mockUsers.json");
});

export const downloadRooms = createAsyncThunk("room/downloadRooms", async () => {
    return retrieveFile("mockRooms.json");
});


export const downloadContact = createAsyncThunk("contact/downloadContact", async () => {
    return retrieveFile("mockContact.json");
});

export const downloadBooking = createAsyncThunk("booking/downloadBooking", async () => {
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