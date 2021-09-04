import { useState, useEffect } from 'react'
import { useThemeProps, IUseTheme } from './types'
import { STORAGE_KEYS } from '../../constants'
import themes from '../../themes'

const VALID_THEME_NAMES = Object.keys(themes)
const { THEMES_KEY } = STORAGE_KEYS

export const useTheme = ({ defaultTheme }: useThemeProps): IUseTheme => {
  const [currentTheme, setCurrentTheme] = useState<string>(defaultTheme)

  const changeTheme = (newTheme: string) => {
    if (!VALID_THEME_NAMES.includes(newTheme)) return

    setCurrentTheme(newTheme)
    localStorage.setItem(THEMES_KEY, newTheme)
  }

  const fetchStoredTheme = () => {
    const storedTheme = localStorage.getItem(THEMES_KEY)
    if (!storedTheme || !VALID_THEME_NAMES.includes(storedTheme)) return changeTheme(defaultTheme)

    setCurrentTheme(storedTheme)
  }

  const switchTheme = () => {
    changeTheme(currentTheme === "dark" ? "light" : "dark")
  }

  useEffect(fetchStoredTheme, [])

  return {
    currentTheme,
    switchTheme
  }
}
