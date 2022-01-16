import { useState, useEffect, useCallback } from 'react';

export const useDropdownButton = (wrapperRef) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const handleOutsideClick = useCallback((event) => {
    const { current } = wrapperRef;
    const { target } = event;

    if (current.contains(target)) return;

    setExpanded(false);
  }, [wrapperRef, expanded]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    }
  });

  return {
    expanded,
    handleClick,
  };
};
