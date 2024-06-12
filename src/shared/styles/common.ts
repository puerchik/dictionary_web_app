import { css } from 'styled-components'

export const Flex = css`
  display: flex;
  align-items: center;
`

export const VisuallyHidden = css`
  position: absolute !important;
  width: 1px !important;
  height: 1px !important;
  margin: -1px !important;
  border: 0 !important;
  padding: 0 !important;
  white-space: nowrap !important;
  clip-path: inset(100%) !important;
  clip: rect(0 0 0 0) !important;
  overflow: hidden !important;
`

export const ResetButton = css`
  padding: 0;
  background-color: transparent;
  border: none;
`
export const PlayIcon = css`
  width: 0px;
  height: 0px;
  border-style: solid;
  border-width: 10px 0 10px 20px;
  border-color: transparent transparent transparent #9b3de9;
  transform: rotate(0deg);
`
