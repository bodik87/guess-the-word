import { configureStore } from "@reduxjs/toolkit";
import guessedWordReducer from './word/wordSlice'
import playerReducer from './player/playerSlice'

export const store = configureStore({
  reducer: {
    word: guessedWordReducer,
    player: playerReducer
  }
})