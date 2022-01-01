import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { TransparentButton } from '../TransparentButton';
import { SunIcon } from '../../icons/SunIcon';
import { MoonIcon } from '../../icons/MoonIcon';

export const SwitchThemeButton = () => {
  const { currentTheme, switchTheme } = useContext(ThemeContext);

  return (
    <TransparentButton onClick={switchTheme}>
      {currentTheme === 'light' ? <MoonIcon /> : <SunIcon />}
    </TransparentButton>
  );
};
