import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      light: string
      primary: string
      primaryLight: string
      primaryLighter: string
      primaryDark: string
    }
  }
}
