import { createSlice } from "@reduxjs/toolkit";

export const sideBarSlice = createSlice({
    name: "sidebar",
    initialState: {
        activated: true,

    },
    reducers: {
        toggle: (state, action) => {
            if (state.activated === true) {
                state.activated = false;
            } else {
                state.activated = true;
            }
        },
    },
});

export const {toggle} = sideBarSlice.actions;