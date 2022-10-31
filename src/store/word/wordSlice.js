import { createSlice } from '@reduxjs/toolkit';

const wordSlice = createSlice({
  name: 'guessedWord',
  initialState: {
    guessedLetters: [],
    selectedLetters: [],
    activePlayer: true
  },
  reducers: {
    pushToGuessedLetters: (state, action) => {
      state.guessedLetters.push(action.payload)
    },
    pushToSelectedLetters: (state, action) => {
      state.selectedLetters.push(action.payload)
    },
    toggleActivePlayer: (state) => {
      state.activePlayer = !state.activePlayer
    },
  }
});

export const {
  pushToGuessedLetters,
  pushToSelectedLetters,
  toggleActivePlayer
} = wordSlice.actions;

export default wordSlice.reducer;