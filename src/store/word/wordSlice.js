import { createSlice } from '@reduxjs/toolkit';

const wordSlice = createSlice({
  name: 'guessedWord',
  initialState: {
    guessedLetters: [],
    selectedLetters: [],
    informationMessage: 'Починаймо!',
  },
  reducers: {
    pushToGuessedLetters: (state, action) => {
      state.guessedLetters.push(action.payload)
    },
    pushToSelectedLetters: (state, action) => {
      state.selectedLetters.push(action.payload)
    },
    setInformationMessage: (state, action) => {
      state.informationMessage = action.payload
    },
  }
});

export const {
  pushToGuessedLetters,
  pushToSelectedLetters,
  setInformationMessage,
} = wordSlice.actions;

export default wordSlice.reducer;