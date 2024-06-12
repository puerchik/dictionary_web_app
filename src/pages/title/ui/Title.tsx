import { MutableRefObject, useRef, useState } from 'react'
import { styled } from 'styled-components'

import { Container } from 'shared/styles/Conatiner'
import { UseAppSelector } from 'shared/hooks/reduxHooks'
import { Flex, PlayIcon, ResetButton, VisuallyHidden } from 'shared/styles/common'

export const Title = () => {
  const word = UseAppSelector(state => state.word[0].word)
  const phoneticTranscription = UseAppSelector(state => state.word[0].phonetic)
  const phonetics = UseAppSelector(state => state.word[0].phonetics)

  const phonetic = phoneticTranscription
    ? phoneticTranscription
    : phonetics?.filter(el => el.text !== undefined)?.[0]?.text
  const audio = phonetics?.filter(el => el.audio !== '')?.[0]?.audio

  const audioRef: MutableRefObject<HTMLAudioElement | null> = useRef(null)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const audioControlsHandler = () => {
    if (audioRef.current !== null && !isPlaying) {
      audioRef.current.play()
      setIsPlaying(!isPlaying)
    }

    if (audioRef.current !== null && isPlaying) {
      audioRef.current.pause()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <TitleWrapper>
        <Text>
          <MainTitle>{word}</MainTitle>
          <Transcription>{phonetic}</Transcription>
        </Text>
        <AudioWrapper $isPlaying={isPlaying}>
          <audio
            src={audio}
            ref={audioRef}
          ></audio>
          <button onClick={audioControlsHandler}>
            <span>Play audio</span>
          </button>
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
  font-size: 36px;
  font-weight: 700;
`

const Transcription = styled.p`
  color: #a864cb;
  font-size: 18px;
`

const AudioWrapper = styled.div<{ $isPlaying: boolean }>`
  & button {
    & span {
      ${VisuallyHidden}
    }
    ${ResetButton}
    position: relative;
    width: 70px;
    aspect-ratio: 1;
    background-color: #e9d0fa;
    border-radius: 50%;
    transition: 0.2s;

    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 55%;
      translate: -50% -50%;

      ${props => (props.$isPlaying ? `` : PlayIcon)}
    }

    &:hover {
      background-color: #dfbbf7;
    }
  }
`
