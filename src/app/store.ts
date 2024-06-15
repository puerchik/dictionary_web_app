import { configureStore } from '@reduxjs/toolkit'
import { dictionaryWordReducer } from 'components/word/model/dictionaryWordSlice'
import { errorReducer } from 'components/word/model/errorSlice'
import { fontReducer } from 'shared/themes/fontSlice'
import { themeReducer } from 'shared/themes/themesSlice'

export const store = configureStore({
  reducer: {
    word: dictionaryWordReducer,
    theme: themeReducer,
    font: fontReducer,
    error: errorReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
