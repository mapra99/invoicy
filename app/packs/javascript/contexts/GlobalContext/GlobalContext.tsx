import React, { createContext } from 'react'
import { AuthProvider } from '../AuthContext'
import { ThemeProvider } from '../ThemeContext'
import { ModalProvider } from '../ModalContext'

export const GlobalContext = createContext<null>(null);

export const GlobalProvider = ({children}) => (
  <AuthProvider>
    <ThemeProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </ThemeProvider>
  </AuthProvider>
)
