import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import { getWord } from 'shared/api'

import { GlobalStyle } from 'shared/styles/GlobalStyle'
import { Normalize } from 'shared/styles/Normalize'
import { Container } from 'shared/styles/Conatiner'
import { MainTitle } from 'shared/styles/MainTitle'

type Input = {
  word: string
}

const App = () => {
  const { register, handleSubmit } = useForm<Input>()

  const onSubmit: SubmitHandler<Input> = data => {
    setWord(data.word)
  }

  const setWord = async (word: string) => {
    const res = await getWord(word)
    console.log(res.data[0])
  }

  useEffect(() => {
    setWord('keyboard')
  }, [])

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register('word')} />
          <button type="submit">Search</button>
        </form>
      </Container>
    </>
  )
}

export default App
