import { SubmitHandler, useForm } from 'react-hook-form'
import { Header } from 'widgets/header'

import { getWord } from 'shared/api'

import { Container } from 'shared/styles/Conatiner'

type Input = {
  word: string
}

export const DictionaryWord = () => {
  const { register, handleSubmit } = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = data => {
    setWord(data.word)
  }

  const setWord = async (word: string) => {
    const res = await getWord(word)
    console.log(res.data[0])
  }

  return (
    <>
      <Header />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('word')} />
          <button type="submit">Search</button>
        </form>
      </Container>
    </>
  )
}
