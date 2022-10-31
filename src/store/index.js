import { configureStore } from "@reduxjs/toolkit";
import guessedWordReducer from './word/wordSlice'

export const store = configureStore({
  reducer: {
    word: guessedWordReducer
  }
})