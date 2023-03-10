import { configureStore } from "@reduxjs/toolkit";

import charactersSlice from './slices/characters-slice'

const store = configureStore({
    reducer: {
        charactersSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch