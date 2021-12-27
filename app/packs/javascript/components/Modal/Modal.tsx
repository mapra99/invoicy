import React, { useEffect, useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import {
  ModalOverlay
} from './Modal.styled'

export const Modal = ({ children }) => {
  const { setModalActive } = useContext(ModalContext)

  useEffect(() => {
    setModalActive(true)

    return () => setModalActive(false)
  }, [])

  return (
    <ModalOverlay>
      { children }
    </ModalOverlay>
  )
}
