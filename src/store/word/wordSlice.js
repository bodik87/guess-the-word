import { createSlice } from '@reduxjs/toolkit';

const wordSlice = createSlice({
  name: 'guessedWord',
  initialState: {
    guessedLetters: [],
    selectedLetters: [],
    activePlayer: true,
    informationMessage: 'Починаймо!'
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
    setInformationMessage: (state, action) => {
      state.informationMessage = action.payload
    },
  }
});

export const {
  pushToGuessedLetters,
  pushToSelectedLetters,
  toggleActivePlayer,
  setInformationMessage
} = wordSlice.actions;

export default wordSlice.reducer;