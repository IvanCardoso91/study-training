import { ThemeProvider } from "styled-components";

const theme = {

}

export const Theme: React.FC = ({ children }) => {
  return(
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  )
}