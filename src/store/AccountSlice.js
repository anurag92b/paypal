import { createSlice } from "@reduxjs/toolkit";

export const accountDetails = createSlice({
    name: "account",
    initialState: {
        email: "",
        password: ""
    },
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload
        }
    }
})

export const { setEmail, setPassword } = accountDetails.actions;

export default accountDetails.reducer;