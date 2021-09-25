import React from 'react';
import { Link } from 'react-router-dom'
import { InvoicyIcon } from '../../icons/InvoicyIcon'
import { SwitchThemeButton } from '../SwitchThemeButton'
import { ProfileDropdown } from '../ProfileDropdown'
import {
  NavigationContainer,
  NavigationLogoWrapper,
  NavigationRightBottomWrapper
} from './Navigation.styled'
import { ROUTES } from '../../constants'

const { ROOT } = ROUTES

export const Navigation = () => {
  return (
    <NavigationContainer>
      <NavigationLogoWrapper>
        <Link to={ROOT}>
          <InvoicyIcon />
        </Link>
      </NavigationLogoWrapper>

      <NavigationRightBottomWrapper>
        <SwitchThemeButton />
        <ProfileDropdown />
      </NavigationRightBottomWrapper>
    </NavigationContainer>
  )
}
