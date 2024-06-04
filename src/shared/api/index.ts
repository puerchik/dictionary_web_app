import axios from 'axios'
import { ResponseWord } from 'shared/types/response'

const instance = axios.create({
  baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
})

export const getWord = (word: string) => instance.get<ResponseWord[]>(word)
