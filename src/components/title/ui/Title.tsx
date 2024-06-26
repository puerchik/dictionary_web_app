import { MutableRefObject, useRef, useState } from 'react'
import { styled } from 'styled-components'

import { UseAppSelector } from 'shared/hooks/reduxHooks'

import { Container } from 'shared/styles/Conatiner'
import { Flex, PauseImg, PlayImg, ResetButton, VisuallyHidden } from 'shared/styles/common'

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
      <S.TitleWrapper>
        <S.Text>
          <S.MainTitle>{word}</S.MainTitle>
          <S.Transcription>{phonetic}</S.Transcription>
        </S.Text>
        <S.AudioWrapper $isPlaying={isPlaying}>
          <audio
            src={audio}
            ref={audioRef}
            onEnded={() => setIsPlaying(!isPlaying)}
          ></audio>
          {!!audio ? (
            <button
              title="Play audio"
              onClick={audioControlsHandler}
              disabled={!audio}
            >
              <span>Play audio</span>
            </button>
          ) : (
            <S.NoAudio>Audio not available</S.NoAudio>
          )}
        </S.AudioWrapper>
      </S.TitleWrapper>
    </>
  )
}

const S = {
  TitleWrapper: styled(Container)`
    ${Flex}

    justify-content: space-between;
    margin-bottom: 50px;

    @media (max-width: 500px) {
      flex-direction: column;
      align-items: flex-start;
      row-gap: 20px;
    }
  `,

  Text: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  `,

  MainTitle: styled.h1`
    font-size: 36px;
    font-weight: 700;

    @media (max-width: 500px) {
      font-size: 30px;
    }
  `,

  Transcription: styled.p`
    color: #a864cb;
    font-size: 18px;
  `,

  AudioWrapper: styled.div<{ $isPlaying: boolean }>`
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
        left: ${props => (props.$isPlaying ? `50%` : `55%`)};
        translate: -50% -50%;
        transition: 0.2s;

        ${props => (props.$isPlaying ? PauseImg : PlayImg)}
      }

      @media (hover: hover) {
        &:hover {
          background-color: #dfbbf7;
        }
      }

      @media (hover: none) {
        &:active {
          background-color: #dfbbf7;
        }
      }
    }
  `,
  NoAudio: styled.p`
    font-size: 18px;
  `,
}
