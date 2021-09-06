import React, { createContext } from 'react'
import { AuthProvider } from '../AuthContext'
import { ThemeProvider } from '../ThemeContext'

export const GlobalContext = createContext<null>(null);

export const GlobalProvider = ({children}) => (
  <AuthProvider>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </AuthProvider>
)
