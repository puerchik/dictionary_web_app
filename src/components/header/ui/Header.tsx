import { ChangeEvent } from 'react'
import { useAppDispatch } from 'shared/hooks/reduxHooks'
import { themeAction } from 'shared/themes/themesSlice'
import styled from 'styled-components'

import { fontAction } from 'shared/themes/fontSlice'

import NativeSelect from '@mui/material/NativeSelect'
import Switch from '@mui/material/Switch'

import { Container } from 'shared/styles/Conatiner'
import { Flex } from 'shared/styles/common'

import LogoIcon from 'shared/ui/icons/dictionary.svg'
import MoonIcon from 'shared/ui/icons/moon.svg'
import SunIcon from 'shared/ui/icons/sun.svg'

export const Header = () => {
  const dispatch = useAppDispatch()

  const themeSelectHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(themeAction.setTheme({ theme: e.currentTarget.checked ? 'dark' : 'light' }))
  }

  const serifSelectHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    const font = e.currentTarget.value
    if (font === 'serif' || font === 'sans-serif') {
      dispatch(fontAction.setFont({ font }))
    }
  }

  return (
    <>
      <S.Header>
        <S.HeaderInner>
          <S.Logo />
          <S.SerifSelect
            onChange={serifSelectHandler}
            defaultValue={30}
            inputProps={{
              name: 'font-family',
              id: 'uncontrolled-native',
            }}
          >
            <option value={'serif'}>Serif</option>
            <option value={'sans-serif'}>Sans serif</option>
          </S.SerifSelect>
          <S.FlexWrapper>
            <S.ThemeSelectImage src={SunIcon} />
            <Switch onChange={themeSelectHandler} />
            <S.ThemeSelectImage src={MoonIcon} />
          </S.FlexWrapper>
        </S.HeaderInner>
      </S.Header>
    </>
  )
}

const S = {
  Header: styled.header`
    padding-top: 50px;
    padding-bottom: 25px;
  `,

  HeaderInner: styled(Container)`
    ${Flex}

    column-gap: 30px;

    @media (max-width: 500px) {
      justify-content: space-between;
    }
  `,

  Logo: styled.img.attrs(_ => ({
    src: LogoIcon,
  }))`
    height: 55px;

    @media (max-width: 500px) {
      display: none;
    }
  `,

  SerifSelect: styled(NativeSelect)`
    margin-left: auto;

    & select:focus {
      background-color: inherit;
    }

    &::before,
    &::after {
      content: none !important;
    }

    @media (max-width: 500px) {
      margin: 0;
    }
  `,

  ThemeSelectImage: styled.img`
    height: 25px;
    aspect-ratio: 1;
  `,

  FlexWrapper: styled.div`
    position: relative;
    ${Flex}
    column-gap: 5px;

    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: -15px;
      translate: 0 -50%;
      width: 1px;
      height: 70%;
      background-color: #808080;

      @media (max-width: 500px) {
        content: none;
      }
    }
  `,
}
