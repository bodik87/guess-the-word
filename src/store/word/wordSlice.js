import { createSlice } from '@reduxjs/toolkit';

const wordSlice = createSlice({
  name: 'guessedWord',
  initialState: {
    guessedLetters: [],
    selectedLetters: [],
  },
  reducers: {
    pushToGuessedLetters: (state, action) => {
      state.guessedLetters.push(action.payload)
    },
    pushToSelectedLetters: (state, action) => {
      state.selectedLetters.push(action.payload)
    },
  }
});

export const {
  pushToGuessedLetters,
  pushToSelectedLetters,
} = wordSlice.actions;

export default wordSlice.reducer;