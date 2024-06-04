import { Word } from 'shared/types/response'

const initialState: Word[] = [
  {
    word: '',
    phonetics: [{ text: '', audio: '' }],
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
