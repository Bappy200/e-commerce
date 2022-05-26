import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState:{
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart: (state)=> {
            state.isFetching = true;
        },
        loginSuccess: (state, action)=>{
            state.isFetching = false;
            state.error = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
        logoutStart: (state)=> {
            state.isFetching = true;
        },
        logoutSuccess: (state)=>{
            
        },
        logoutFailure: (state)=>{
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const {loginFailure, loginStart, loginSuccess, logoutFailure, logoutStart, logoutSuccess} = userSlice.actions;
export default userSlice.reducer;