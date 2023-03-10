import { configureStore } from "@reduxjs/toolkit";

import charactersSlice from './slices/characters-slice'
import authSlice from './slices/auth-slice'

const store = configureStore({
    reducer: {
        charactersSlice,
        authSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch