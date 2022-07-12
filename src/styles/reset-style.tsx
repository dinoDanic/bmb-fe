import { css, Global } from '@emotion/react'
import { normalize } from '@kodiui/kodiui'
import { theme } from './theme'

const myStyle = css`
  * {
    font-family: 'Nunito';
  }
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: ${theme.color.primaryDark};
    color: white;
  }

  a {
    color: inherit;
    text-decoration: underline;
    &:hover {
      text-decoration: underline;
      background-color: ${theme.color.primary};
      /* color: ${theme.color.primaryDark}; */
    }
  }
`

export const Normalize = () => {
  return (
    <>
      <Global styles={normalize} />
      <Global styles={myStyle} />
    </>
  )
}
