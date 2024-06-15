import { styled } from 'styled-components'

import { UseAppSelector } from 'shared/hooks/reduxHooks'

import { Container } from 'shared/styles/Conatiner'
import React from 'react'

export const Meanings = () => {
  const meaningsArr = UseAppSelector(state => state.word)[0]['meanings']

  console.log(meaningsArr)

  return (
    <>
      <S.MeaningsWarpper>
        {meaningsArr.map((meaning, i) => {
          return (
            <React.Fragment key={i}>
              <S.PartOfSpeech>{meaning.partOfSpeech}</S.PartOfSpeech>
              <S.Title>Meaning</S.Title>
              <S.DefinitionsList>
                {meaning.definitions.map((definition, i) => {
                  return (
                    <React.Fragment key={i}>
                      <S.DefinitionsItem>
                        <p>{definition.definition}</p>
                      </S.DefinitionsItem>
                      {definition.example && (
                        <S.DefinitionsExample>{definition.example}</S.DefinitionsExample>
                      )}
                    </React.Fragment>
                  )
                })}
              </S.DefinitionsList>
            </React.Fragment>
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
  Title: styled.h3`
    font-size: 18px;
    color: #808080;
    margin-bottom: 25px;
  `,
  DefinitionsList: styled.ul``,
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
  DefinitionsExample: styled.p``,
}
