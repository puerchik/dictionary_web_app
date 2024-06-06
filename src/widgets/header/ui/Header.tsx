import styled from 'styled-components'

import LogoIcon from 'shared/ui/icons/dictionary.svg'

import { Container } from 'shared/styles/Conatiner'
import NativeSelect from '@mui/material/NativeSelect'
import { Flex } from 'shared/styles/common'

export const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderInner>
          <S.Logo />

          <S.SerifSelect
            defaultValue={30}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </S.SerifSelect>
        </S.HeaderInner>
      </S.Header>
    </>
  )
}

const S = {
  Header: styled.header``,

  HeaderInner: styled(Container)`
    ${Flex}
  `,

  Logo: styled.img.attrs(_ => ({
    src: LogoIcon,
  }))`
    height: 55px;
    filter: brightness(1);
  `,

  SerifSelect: styled(NativeSelect)`
    &::before {
      content: none !important;
    }
  `,
}
