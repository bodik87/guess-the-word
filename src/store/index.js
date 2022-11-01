import { configureStore } from "@reduxjs/toolkit";
import gameReducer from './game/gameSlice'
import playerReducer from './player/playerSlice'
import guessedWordReducer from './word/wordSlice'

export const store = configureStore({
  reducer: {
    game: gameReducer,
    player: playerReducer,
    word: guessedWordReducer,
  }
})