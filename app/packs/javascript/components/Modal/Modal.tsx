import React, { useEffect, useContext } from 'react';
import { ModalContext } from '../../contexts/ModalContext';
import {
  ModalOverlay,
} from './Modal.styled';
import { ModalProps } from './types';

export const Modal = ({ children, open }: ModalProps) => {
  const { setModalActive } = useContext(ModalContext);

  useEffect(() => {
    setModalActive(true);

    return () => setModalActive(false);
  }, []);

  if (!open) return null;

  return (
    <ModalOverlay>
      { children }
    </ModalOverlay>
  );
};
