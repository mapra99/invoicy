import React, { useContext, useState } from 'react'
import { useBreakpoint } from '../../hooks/useBreakpoint'
import { AuthContext } from '../../contexts/AuthContext'
import { ProfileIcon } from '../../icons/ProfileIcon'
import {
  ProfileDropdownButton,
  ProfileDropdownOptionsWrapper,
  ProfileDropdownWrapper,
  ProfileDropdownOption
} from './ProfileDropdown.styled'

export const ProfileDropdown = () => {
  const { signOut } = useContext(AuthContext)
  const [optionsVisible, setOptionsVisible] = useState<boolean>(false);
  const { desktop } = useBreakpoint();

  return (
    <ProfileDropdownWrapper
      onMouseEnter={() => setOptionsVisible(true)}
      onMouseLeave={() => setOptionsVisible(false)}
    >
      <ProfileDropdownButton  onClick={() => !desktop && setOptionsVisible(!optionsVisible)}>
        <ProfileIcon/>
      </ProfileDropdownButton>

      {optionsVisible && (
        <ProfileDropdownOptionsWrapper onClick={() => setOptionsVisible(false)}>
          <ProfileDropdownOption onClick={signOut}>
            Sign out
          </ProfileDropdownOption>
        </ProfileDropdownOptionsWrapper>
      )}
    </ProfileDropdownWrapper>
  )
}
