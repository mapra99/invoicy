import React from 'react'
import { MemoryRouter } from "react-router";
import { ModalProvider } from '../app/packs/javascript/contexts/ModalContext';
import { ThemeProvider } from '../app/packs/javascript/contexts/ThemeContext';
import { InvoicesProvider } from '../app/packs/javascript/contexts/InvoicesContext';
import { ThemeSwitch } from './ThemeSwitch';
import '../app/packs/styles/global/index.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <Story />
      <ThemeSwitch />
    </ThemeProvider>
  ),
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  ),
  (Story) => (
    <ModalProvider>
      <Story />
    </ModalProvider>
  ),
  (Story) => (
    <InvoicesProvider>
      <Story />
    </InvoicesProvider>
  )
]
