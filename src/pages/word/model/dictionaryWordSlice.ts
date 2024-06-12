import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit/react'
import { Word } from 'shared/types/response'

const initialState: Word[] = [
  {
    word: '',
    phonetics: [{ text: '', audio: '' }],
    phonetic: '',
    meanings: [
      {
        partOfSpeech: '',
        definitions: [{ definition: '', example: '' }],
        antonyms: [],
        synonyms: [],
      },
    ],
    sourceUrls: [''],
  },
]

const dictionaryWordSlice = createSlice({
  name: 'dictionaryWord',
  initialState,
  reducers: {
    setWord(state: Word[], action: PayloadAction<Word>) {
      state[0] = action.payload
    },
  },
})

export const dictionaryWordReducer = dictionaryWordSlice.reducer
export const dictionaryWordActions = dictionaryWordSlice.actions
