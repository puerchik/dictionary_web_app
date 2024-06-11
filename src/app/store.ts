import { configureStore } from '@reduxjs/toolkit'
import { dictionaryWordReducer } from 'pages/word/model/dictionaryWordSlice'
import { themeReducer } from 'shared/themes/themesSlice'

export const store = configureStore({
  reducer: {
    word: dictionaryWordReducer,
    theme: themeReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
