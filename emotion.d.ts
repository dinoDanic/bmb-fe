import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string
      primaryLight: string
      primaryLighter: string
      primaryDark: string
    }
  }
}
