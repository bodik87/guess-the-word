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
    increaseFirstScore: (state, action) => {
      state.firstPlayerScore = state.firstPlayerScore + +action.payload
    },
    increaseSecondScore: (state, action) => {
      state.secondPlayerScore = state.secondPlayerScore + +action.payload
    },
  }
});

export const {
  toggleActivePlayer,
  increaseFirstScore,
  increaseSecondScore,
} = playerSlice.actions;

export default playerSlice.reducer;