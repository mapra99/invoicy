import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { ProfileIcon } from '../../icons/ProfileIcon'
import { ProfileDropdownButton } from './ProfileDropdown.styled'

export const ProfileDropdown = () => {
  const { signOut } = useContext(AuthContext)

  return (
    <ProfileDropdownButton onClick={signOut}>
      <ProfileIcon/>
    </ProfileDropdownButton>
  )
}
