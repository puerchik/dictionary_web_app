import React from 'react'
import { styled } from 'styled-components'

import { UseAppSelector } from 'shared/hooks/reduxHooks'

import { Container } from 'shared/styles/Conatiner'
import { Flex } from 'shared/styles/common'

export const Meanings = () => {
  const meaningsArr = UseAppSelector(state => state.word)[0]['meanings']

  return (
    <>
      <S.MeaningsWarpper>
        {meaningsArr.map((meaning, i) => {
          return (
            <S.Meaning key={i}>
              <S.PartOfSpeech>{meaning.partOfSpeech}</S.PartOfSpeech>
              <S.Title>Meaning</S.Title>
              <S.DefinitionsList>
                {meaning.definitions.map((definition, i) => {
                  return (
                    <React.Fragment key={i}>
                      <S.DefinitionsItem>
                        <p>{definition.definition}</p>
                        {definition.example && (
                          <S.DefinitionsExample>
                            <q>{definition.example}</q>
                          </S.DefinitionsExample>
                        )}
                      </S.DefinitionsItem>
                    </React.Fragment>
                  )
                })}
              </S.DefinitionsList>
              {meaning.synonyms.length !== 0 && (
                <S.Synonyms>
                  <S.Title>Synonyms</S.Title>
                  {meaning.synonyms.map((synonym, i) => {
                    return <span key={i}>{synonym}</span>
                  })}
                </S.Synonyms>
              )}
            </S.Meaning>
          )
        })}
      </S.MeaningsWarpper>
    </>
  )
}

const S = {
  MeaningsWarpper: styled(Container)``,

  PartOfSpeech: styled.span`
    position: relative;
    display: block;
    font-weight: 700;
    font-style: italic;
    font-size: 18px;
    margin-bottom: 50px;

    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 90%;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: #808080;
    }
  `,

  Meaning: styled.div`
    margin-bottom: 50px;
  `,

  Title: styled.h3`
    font-size: 18px;
    color: #808080;
    margin-bottom: 25px;
  `,

  DefinitionsList: styled.ul`
    margin-bottom: 50px;
  `,

  DefinitionsItem: styled.li`
    position: relative;
    padding-left: 20px;
    margin-left: 20px;
    margin-bottom: 15px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 12px;
      transform: translateY(-50%);
      width: 5px;
      aspect-ratio: 1;
      border-radius: 50%;
      background-color: #9b3de9;
    }

    & p {
      font-size: 18px;
      line-height: 1.3;
    }
  `,

  Synonyms: styled.div`
    ${Flex}
    flex-wrap: wrap;
    column-gap: 25px;

    & h3 {
      margin: 0;
    }

    & span {
      font-size: 18px;
      color: #9b3de9;
    }
  `,

  DefinitionsExample: styled.blockquote`
    margin-top: 10px;
    font-size: 18px;
    color: #808080;
  `,
}
