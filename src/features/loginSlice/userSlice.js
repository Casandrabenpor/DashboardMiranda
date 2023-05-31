import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            let userJson = JSON.stringify(action.payload);
            localStorage.setItem("user",userJson);
            state.user = action.payload;
            
        },
        logout: (state) => {
            localStorage.removeItem("user");
            state.user = null;

        },
        loadFromStorage: (state, action) => {
            if(state.user != null)
            {
                return;
            }

             const userJson = localStorage.getItem("user");
             if (userJson){
                state.user = JSON.parse(userJson);
             }

        }
    },
});
export const { login, logout ,loadFromStorage } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export default userSlice.reducer;