import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from '../../axios'

const initialState = {
    characters: <null | []>null,
    charactersLoading: false,
    charactersError: false,
    currentCharacter: null,
    currentCharacterLoading: false,
    currentCharacterError: false
};

export const fetchCharacters: any = createAsyncThunk("/fetchCharacters", async (name: string) => {
    const { data } = await axios.get(`/character/?name=${name}`)
    return data
});

export const fetchOneCharacter: any = createAsyncThunk("/fetchOneCharacter", async (id: string) => {
    const { data } = await axios.get(`/character/${id}`)
    return data
});

const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder 
            // всі персонажі
            .addCase(fetchCharacters.pending, state => {
                state.charactersError = false;
                state.charactersLoading = true
            })
            .addCase(fetchCharacters.fulfilled, (state, action) => {
                state.characters = action.payload.results.sort(function (a: any, b: any) {
                    if (a.name > b.name) {
                        return 1;
                    }
                    if (a.name < b.name) {
                        return -1;
                    }
                    return 0;
                });
                state.charactersLoading = false
                state.charactersError = false;
            })
            .addCase(fetchCharacters.rejected, (state,action) => {
                state.charactersLoading = false
                state.charactersError = true
            })
            // один персонаж
            .addCase(fetchOneCharacter.pending, state => {
                state.currentCharacterError = false;
                state.currentCharacterLoading = true
            })
            .addCase(fetchOneCharacter.fulfilled, (state, action) => {
                state.currentCharacter = action.payload
                state.currentCharacterLoading = false
                state.currentCharacterError = false;
            })
            .addCase(fetchOneCharacter.rejected, (state,action) => {
                state.currentCharacterLoading = false
                state.currentCharacterError = true
            })
        }
})

const { actions, reducer } = charactersSlice;

export default reducer;

export const {
} = actions;