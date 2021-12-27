import React, { useState, createContext } from "react"
import { IModalContext } from './types'

export const ModalContext = createContext<IModalContext | null>(null);

export const ModalProvider: React.FC = ({children}) => {
  const [modalActive, setModalActive] = useState(false)

  const contextVal: IModalContext = {
    modalActive,
    setModalActive
  }

  return (
    <ModalContext.Provider value={contextVal}>
      {children}
    </ModalContext.Provider>
  )
}
