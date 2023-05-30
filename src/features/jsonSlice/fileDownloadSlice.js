import { createAsyncThunk } from "@reduxjs/toolkit";

export const downloadFile = createAsyncThunk("data/download", async () => {

    const data =  await fetch("./mockData/mockUsers.json")
    .catch((error) => {
        throw error;
    });

    const json = await data.json()
    .catch((error) => {
        throw error;
    });
    return json;
});



export const downloadRooms = createAsyncThunk("data/downloadRooms", async () => {

    const data =  await fetch("./mockData/mockRooms.json")
    .catch((error) => {
        throw error;
    });

    const json = await data.json()
    .catch((error) => {
        throw error;
    });
    return json;
});


export const downloadContact = createAsyncThunk("data/downloadContact", async () => {

    const data =  await fetch("./mockData/mockContact.json")
    .catch((error) => {
        throw error;
    });

    const json = await data.json()
    .catch((error) => {
        throw error;
    });
    return json;
});