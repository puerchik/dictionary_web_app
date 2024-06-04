import { useEffect } from 'react'
import { getWord } from 'shared/api'
import { Container } from 'shared/styles/Conatiner'
import { GlobalStyle } from 'shared/styles/GlobalStyle'
import { MainTitle } from 'shared/styles/MainTitle'
import { Normalize } from 'shared/styles/Normalize'

const App = () => {
  const setWord = async () => {
    const res = await getWord('keyboard')
    console.log(res.data[0])
  }

  useEffect(() => {
    setWord()
  }, [])
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Container>
        <MainTitle>keyboard</MainTitle>
      </Container>
    </>
  )
}

export default App
