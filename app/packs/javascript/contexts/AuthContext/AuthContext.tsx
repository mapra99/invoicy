import React, { useState, createContext, useEffect } from "react"
import { IAuthContext } from './types'
import { User } from '../../models/User';
import { server } from '../../utils/server';
import { ROUTES } from '../../constants';

const { CURRENT_USER } = ROUTES.API
const { SIGN_OUT, AFTER_SIGN_OUT } = ROUTES.AUTH

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider: React.FC = ({children}) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<string[]>([])

  const fetchCurrentUser = async () => {
    try {
      setLoading(true)

      const response = await server.get(CURRENT_USER)  
      const currentUser = await response.json()
      setCurrentUser(currentUser)
    } catch (err) {
      console.error(`Could not fetch current user - ${err}`)
      setErrors([err])
    }
    setLoading(false)
  }

  const signOut = async () => {
    try {
      setLoading(true)
  
      const response = await server.delete(SIGN_OUT)
      if (response.ok) window.location.href = AFTER_SIGN_OUT
    } catch(err) {
      setErrors([err])
    }

    setLoading(false)
  }

  useEffect(() => { fetchCurrentUser() }, [])

  const contextVal: IAuthContext = {
    currentUser,
    signOut,
    loading,
    errors
  }

  return (
    <AuthContext.Provider value={contextVal}>
      {children}
    </AuthContext.Provider>
  )
}
