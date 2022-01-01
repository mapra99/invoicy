import React, { createContext } from "react"
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { IThemeContext } from './types'
import { useTheme } from '../../hooks/useTheme';
import { GlobalStyle } from '../../components/GlobalStyle';
import themes from '../../themes';

export const ThemeContext = createContext<IThemeContext | null>(null);

export const ThemeProvider: React.FC = ({children}) => {
  const { currentTheme, switchTheme } = useTheme({ defaultTheme: "dark" })

  const contextVal: IThemeContext = {
    currentTheme,
    switchTheme
  }

  return (
    <ThemeContext.Provider value={contextVal}>
      <StyledThemeProvider theme={themes[currentTheme]}>
        <GlobalStyle />

        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
