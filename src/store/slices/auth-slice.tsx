import { createSlice } from "@reduxjs/toolkit";

const loggedUserStorage: string | null = window.localStorage.getItem("logged-user");
const logged_userValue: ILoggedUSer | null = loggedUserStorage ? JSON.parse(loggedUserStorage) : null;

export interface ILoggedUSer {
    googleId: string;
    imageUrl: string;
    email: string;
    name: string;
    givenName: string;
    familyName: string;
}

const initialState = {
    logged_user: logged_userValue,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        auth_login: (state, action) => {
            state.logged_user = action.payload;
        },
    },
});

const { actions, reducer } = authSlice;

export default reducer;

export const { auth_login } = actions;
