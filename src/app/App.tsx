import { DictionaryWord } from 'pages/word'

import { GlobalStyle } from 'shared/styles/GlobalStyle'
import { Normalize } from 'shared/styles/Normalize'

const App = () => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <DictionaryWord />
    </>
  )
}

export default App
