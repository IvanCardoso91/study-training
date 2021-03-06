import { ThemeProvider } from "styled-components";

const fontSizes: any = []
fontSizes.body = fontSizes[0]
fontSizes.bodyExtraLarge = fontSizes[1]
fontSizes.displayExtraLarge = fontSizes[2]

const primary = '#2567B4'
const secondary = '#F9B531'

const theme = {
  fontSizes,
  colors:{
    primary,
    secondary
  }
}

export type ThemeType = typeof theme;

export const Theme: React.FC = ({ children }) => {
  return(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}