import { createAsyncThunk } from "@reduxjs/toolkit";

export const downloadFile = createAsyncThunk("data/download", async (fileName) => {

    const data =  await fetch(`./mockData/${fileName}`)
    .catch((error) => {
        throw error;
    });

    const json = await data.json()
    .catch((error) => {
        throw error;
    });
    return json;
});