import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    informationMessage: 'Починаймо!',
    activeCategory: 'months',
    activeQuestionIndex: 0
  },
  reducers: {
    setInformationMessage: (state, action) => {
      state.informationMessage = action.payload
    },
    changeActiveCategory: (state, action) => {
      state.activeCategory = action.payload
    },
    changeActiveQuestionIndex: (state, action) => {
      state.activeQuestionIndex = action.payload
    },
  }
});

export const {
  setInformationMessage,
  changeActiveCategory,
  changeActiveQuestionIndex
} = gameSlice.actions;

export default gameSlice.reducer;