import { useState } from 'react';

export const useDropdownButton = () => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return {
    expanded,
    handleClick,
  };
};
