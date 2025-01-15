import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        isAuthenticated: false,
        isAdmin: false,
        token: "",
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        updateState: (state, action) => {
            state.user = action.payload.user
            state.isAuthenticated = action.payload.isAuthenticated
            state.isAdmin = action.payload.isAdmin
            state.token = action.payload.token
        },
        clearUser: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },
    },
});

export const { setUser, clearUser, updateState } = authSlice.actions;
export default authSlice.reducer;
