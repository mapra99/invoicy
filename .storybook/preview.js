import React from 'react'
import { MemoryRouter } from "react-router";
import { ThemeProvider } from '../app/packs/javascript/contexts/ThemeContext';
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
    </ThemeProvider>
  ),
  (Story) => (
    <MemoryRouter initialEntries={['/']}>
      { Story() }
    </MemoryRouter>
  )
]
