import React, { useEffect, useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import {
  ModalOverlay,
} from './Modal.styled';

export const Modal = ({ children }) => {
  const { modalActive, setModalActive } = useContext(ModalContext);

  useEffect(() => {
    setModalActive(true);

    return () => setModalActive(false);
  }, []);

  if (!modalActive) return null;

  return (
    <ModalOverlay>
      { children }
    </ModalOverlay>
  );
};
