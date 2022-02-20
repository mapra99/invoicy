import { useState } from 'react';

export const useModal = (initialOpen ?: boolean) => {
  const [open, setOpen] = useState<boolean>(initialOpen || false);

  const toggleModal = () => setOpen(!open);

  return {
    open,
    toggleModal,
  };
};
