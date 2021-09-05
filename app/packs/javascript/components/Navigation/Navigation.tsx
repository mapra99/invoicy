import React from 'react';
import { InvoicyIcon } from '../../icons/InvoicyIcon'
import { SwitchThemeButton } from '../SwitchThemeButton'
import {
  NavigationContainer,
  NavigationLogoWrapper,
  NavigationRightBottomWrapper
} from './Navigation.styled'

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLogoWrapper>
        <InvoicyIcon />
      </NavigationLogoWrapper>

      <NavigationRightBottomWrapper>
        <SwitchThemeButton />
      </NavigationRightBottomWrapper>
    </NavigationContainer>
  )
}
