import { MutableRefObject, useRef } from 'react'
import { styled } from 'styled-components'

import { Container } from 'shared/styles/Conatiner'
import { UseAppSelector } from 'shared/hooks/reduxHooks'
import { Flex } from 'shared/styles/common'

export const Title = () => {
  const word = UseAppSelector(state => state.word[0].word)
  const phoneticTranscription = UseAppSelector(state => state.word[0].phonetic)
  const phonetics = UseAppSelector(state => state.word[0].phonetics)

  const phonetic = phoneticTranscription
    ? phoneticTranscription
    : phonetics?.filter(el => el.text !== undefined)?.[0]?.text
  const audio = phonetics?.filter(el => el.audio !== '')?.[0]?.audio

  const audioRef: MutableRefObject<HTMLAudioElement | null> = useRef(null)

  const audioControlsHandler = () => {
    if (audioRef.current !== null) {
      audioRef.current.play()
    }
  }

  return (
    <>
      <TitleWrapper>
        <Text>
          <MainTitle>{word}</MainTitle>
          <Transcription>{phonetic}</Transcription>
        </Text>
        <AudioWrapper>
          <audio
            src={audio}
            ref={audioRef}
          ></audio>
          <button onClick={audioControlsHandler}>Play</button>
        </AudioWrapper>
      </TitleWrapper>
    </>
  )
}

const TitleWrapper = styled(Container)`
  ${Flex}

  justify-content: space-between;
`

const Text = styled.div``

const MainTitle = styled.h1`
  font-size: 26px;
  font-weight: 700;
`

const Transcription = styled.p``

const AudioWrapper = styled.div``
