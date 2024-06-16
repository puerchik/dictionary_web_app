import { styled } from 'styled-components'

import { UseAppSelector } from 'shared/hooks/reduxHooks'
import { Container } from 'shared/styles/Conatiner'
import { Flex } from 'shared/styles/common'

import LinkIcon from 'shared/ui/icons/link.svg'

export const Footer = () => {
  const source = UseAppSelector(state => state.word)[0]['sourceUrls'][0]

  return (
    <>
      <S.Footer>
        <S.FooterInner>
          <S.SourceDesc>Source</S.SourceDesc>
          <S.SourceLink
            href={source}
            target="_blank"
          >
            <span> {source}</span>

            <img
              src={LinkIcon}
              alt="link icon"
            />
          </S.SourceLink>
        </S.FooterInner>
      </S.Footer>
    </>
  )
}

const S = {
  Footer: styled.footer`
    padding-bottom: 50px;
  `,
  FooterInner: styled(Container)`
    ${Flex}
    column-gap: 20px;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 10px;

      & a {
        font-size: 12px;
      }
    }
  `,

  SourceDesc: styled.span`
    font-size: 18px;
  `,

  SourceLink: styled.a`
    ${Flex}
    align-items: flex-start;
    column-gap: 10px;
    transition: 0.2s;
    font-size: 18px;

    & img {
      height: 21px;
      aspect-ratio: 1;
      transition: opacity 0.5s;
    }

    &:hover {
      color: #9b3de9;

      & img {
        opacity: 0.5;
      }
    }
  `,
}
