import React from 'react';
import { InvoicyIcon } from '../../icons/InvoicyIcon'
import { SwitchThemeButton } from '../SwitchThemeButton'
import { ProfileDropdown } from '../ProfileDropdown'
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
        <ProfileDropdown />
      </NavigationRightBottomWrapper>
    </NavigationContainer>
  )
}
