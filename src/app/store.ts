import { configureStore } from '@reduxjs/toolkit'
import { dictionaryWordReducer } from 'pages/word/model/dictionaryWordSlice'

export const store = configureStore({
  reducer: {
    word: dictionaryWordReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
