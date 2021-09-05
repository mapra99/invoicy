import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { StyledSwitchThemeButton } from './SwtichThemeButton.styled';
import { SunIcon } from '../../icons/SunIcon'
import { MoonIcon } from '../../icons/MoonIcon'

export const SwitchThemeButton = () => {
  const { currentTheme, switchTheme } = useContext(ThemeContext)
  
  return (
    <StyledSwitchThemeButton onClick={switchTheme}>
      {currentTheme === "light" ? <MoonIcon /> : <SunIcon />}
    </StyledSwitchThemeButton>
  )
}
