export type ResponseWord = {
  word: string
  phonetic: string
  phonetics: Phonetic[]
  meanings: Meaning[]
  license: License
  sourceUrls: string[]
}

type Phonetic = {
  text: string
  audio: string
  sourceUrl?: string
  license?: License
}

type License = {
  name: string
  url: string
}

type Meaning = {
  partOfSpeech: string
  definitions: Definition[]
  synonyms: any[]
  antonyms: any[]
}

type Definition = {
  definition: string
  synonyms: any[]
  antonyms: any[]
  example?: string
}

type DefinitionExtra = Pick<Definition, 'definition' | 'example'>
type MeaningExtra = Omit<Meaning, 'definitions'> & { definitions: DefinitionExtra[] }

export type Word = Pick<ResponseWord, 'word' | 'phonetic' | 'phonetics' | 'sourceUrls'> & {
  meanings: MeaningExtra[]
}
