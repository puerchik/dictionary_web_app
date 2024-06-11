import { SubmitHandler, useForm } from 'react-hook-form'
import { css, styled } from 'styled-components'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'

import { Header } from 'widgets/header'

import { UseAppSelector } from 'shared/hooks/reduxHooks'
import { getWord } from 'shared/api'
import { Themes } from 'shared/themes/themesSlice'

import { Container } from 'shared/styles/Conatiner'
import { ResetButton, VisuallyHidden } from 'shared/styles/common'

import searchButton from 'shared/ui/icons/search.svg'

type Input = {
  word: string
}

export const DictionaryWord = () => {
  const theme = UseAppSelector(state => state.theme)[0]['theme']
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
          <S.SearchInput
            $theme={theme}
            {...register('word')}
            id="input-with-icon-textfield"
            label="Search"
            InputProps={{
              endAdornment: (
                <S.InputAdornment position="end">
                  <S.SearchButton
                    $theme={theme}
                    type="submit"
                  >
                    <img
                      height="25"
                      src={searchButton}
                      alt="search button"
                    />
                  </S.SearchButton>
                </S.InputAdornment>
              ),
            }}
            variant="standard"
          />
        </form>
      </Container>
    </>
  )
}

const S = {
  SearchInput: styled(TextField)<{ $theme: Themes['theme'] }>`
    width: 100%;
    & label {
      ${VisuallyHidden}
    }

    & input {
      background-color: ${props => (props.$theme === 'light' ? `#e5e5e5` : `#808080`)};
      padding: 10px;
      padding-right: 53px;
      border-radius: 5px;
    }

    & div::after,
    & div::before {
      content: none !important;
    }
  `,

  SearchButton: styled.button<{ $theme: Themes['theme'] }>`
    ${ResetButton}
    ${props =>
      props.$theme === 'dark' &&
      css`
        background-color: #e5e5e5;
      `}

    padding: 3px;
    border: 1px solid ${props => (props.$theme === 'light' ? `#808080` : `#e5e5e5`)};
    border-radius: 5px;
    transition: 0.2s;

    &:hover {
      background-color: ${props => (props.$theme === 'light' ? `#f1f1f1` : `#ffffff`)};
      -webkit-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
    }
  `,

  InputAdornment: styled(InputAdornment)`
    position: absolute;
    right: 5px;
  `,
}
