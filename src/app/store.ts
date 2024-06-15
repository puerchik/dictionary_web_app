import { configureStore } from '@reduxjs/toolkit'
import { dictionaryWordReducer } from 'components/word/model/dictionaryWordSlice'
import { screenStatusReducer } from 'components/word/model/screenStatusSlice'
import { fontReducer } from 'shared/themes/fontSlice'
import { themeReducer } from 'shared/themes/themesSlice'

export const store = configureStore({
  reducer: {
    word: dictionaryWordReducer,
    theme: themeReducer,
    font: fontReducer,
    screenStatus: screenStatusReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
