import React, { useState, createContext, useEffect } from "react"
import { IAuthContext } from './types'
import { User } from '../../models/User';
import { server } from '../../utils/server';
import { ROUTES } from '../../constants';

const { CURRENT_USER } = ROUTES.API

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC = ({children}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  const fetchCurrentUser = async () => {
    try {
      const response = await server.get(`${CURRENT_USER}`)  
      const currentUser = await response.json()
      setCurrentUser(currentUser)
    } catch (err) {
      console.error(`Could not fetch current user - ${err}`)
    }
  }

  useEffect(() => { fetchCurrentUser() }, [])

  const contextVal: IAuthContext = {
    currentUser
  }

  return (
    <AuthContext.Provider value={contextVal}>
      {children}
    </AuthContext.Provider>
  )
}
