import { createSlice } from '@reduxjs/toolkit';

const playerSlice = createSlice({
  name: 'player',
  initialState: {
    activePlayer: true,
    firstPlayerScore: 0,
    secondPlayerScore: 0
  },
  reducers: {
    toggleActivePlayer: (state) => {
      state.activePlayer = !state.activePlayer
    },
    increaseFirstScore: (state) => {
      state.firstPlayerScore = ++state.firstPlayerScore
    },
    increaseSecondScore: (state) => {
      state.secondPlayerScore = ++state.secondPlayerScore
    },
  }
});

export const {
  toggleActivePlayer,
  increaseFirstScore,
  increaseSecondScore,
} = playerSlice.actions;

export default playerSlice.reducer;