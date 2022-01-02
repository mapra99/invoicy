import React from 'react';
import styled from 'styled-components';
import { SwitchThemeButton } from '../app/packs/javascript/components/SwitchThemeButton';

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  padding: 10px;
  background: #EEF1EF;
  border-radius: 8px;
  box-shadow: 0px 10px 10px -10px rgba(72, 84, 159, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ThemeSwitch = () => (
  <ButtonWrapper>
    <SwitchThemeButton />
  </ButtonWrapper>
)
