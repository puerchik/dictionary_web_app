import { styled } from 'styled-components'

import { UseAppSelector } from 'shared/hooks/reduxHooks'

import { Header } from 'components/header'
import { SearchInput } from 'components/searchInput'
import { Title } from 'components/title'
import { Meanings } from 'components/meaning'
import { Footer } from 'components/footer'
import { Container } from 'shared/styles/Conatiner'

export const DictionaryWord = () => {
  const error = UseAppSelector(state => state.screenStatus.error)
  const homeScreen = UseAppSelector(state => state.screenStatus.homeScreen)

  return (
    <>
      <S.Wrapper>
        <Header />
        <S.Main>
          <SearchInput />
          {homeScreen ? (
            <S.ScreenStatus>
              <p>Please enter the word in the form above</p>
            </S.ScreenStatus>
          ) : !error ? (
            <>
              <Title />
              <Meanings />
            </>
          ) : error === 404 ? (
            <S.ScreenStatus>
              <p>Word not found</p>
            </S.ScreenStatus>
          ) : (
            <S.ScreenStatus>
              <p> Error</p>
            </S.ScreenStatus>
          )}
        </S.Main>
        {!error && !homeScreen && <Footer />}
      </S.Wrapper>
    </>
  )
}

const S = {
  Wrapper: styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
  `,

  Main: styled.main`
    flex-grow: 1;
  `,

  ScreenStatus: styled(Container)`
    p {
      font-size: 36px;
      font-weight: 700;

      @media (max-width: 500px) {
        font-size: 30px;
      }
    }
  `,
}
