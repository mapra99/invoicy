import { useState } from 'react';

export const useCheckbox = (
  initialValue: boolean,
  onChange: (isChecked: boolean) => void,
) => {
  const [isChecked, setIsChecked] = useState<boolean>(initialValue);

  const handleChange = (event) => {
    const { checked } = event.target;

    setIsChecked(checked);
    onChange(checked);
  };

  return {
    isChecked,
    handleChange,
  };
};
