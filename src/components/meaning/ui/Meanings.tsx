import { styled } from 'styled-components'

import { UseAppSelector } from 'shared/hooks/reduxHooks'

import { Container } from 'shared/styles/Conatiner'

export const Meanings = () => {
  const meaningsArr = UseAppSelector(state => state.word)[0]['meanings']

  console.log(meaningsArr)

  return (
    <>
      <S.MeaningsWarpper>
        {meaningsArr.map(meaning => {
          return (
            <>
              <S.PartOfSpeech>{meaning.partOfSpeech}</S.PartOfSpeech>
              <S.Title>Meaning</S.Title>
              <S.DefinitionsList>
                {meaning.definitions.map(definition => {
                  return (
                    <>
                      <S.DefinitionsItem>
                        <p>{definition.definition}</p>
                      </S.DefinitionsItem>
                      {definition.example && (
                        <S.DefinitionsExample>{definition.example}</S.DefinitionsExample>
                      )}
                    </>
                  )
                })}
              </S.DefinitionsList>
            </>
          )
        })}
      </S.MeaningsWarpper>
    </>
  )
}

const S = {
  MeaningsWarpper: styled(Container)``,

  PartOfSpeech: styled.p``,
  Title: styled.h3``,
  DefinitionsList: styled.ul``,
  DefinitionsItem: styled.li``,
  DefinitionsExample: styled.p``,
}
