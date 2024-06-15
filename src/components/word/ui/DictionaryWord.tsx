import { Header } from 'components/header'
import { SearchInput } from 'components/searchInput'
import { Title } from 'components/title'
import { Meanings } from 'components/meaning'
import { Footer } from 'components/footer'

export const DictionaryWord = () => {
  return (
    <>
      <Header />
      <main>
        <SearchInput />
        <Title />
        <Meanings />
      </main>
      <Footer />
    </>
  )
}
