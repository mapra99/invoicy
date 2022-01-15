import React from 'react';
import { useDropdownButton } from '../../hooks/useDropdownButton';
import { StatusFilterDropdown } from '../StatusFilterDropdown';
import { ChevronIcon } from '../../icons/ChevronIcon';
import {
  StyledStatusFilterButton,
  FilterDropdownWrapper,
} from './StatusFilterButton.styled';

export const StatusFilterButton = () => {
  const { expanded, handleClick } = useDropdownButton();

  return (
    <FilterDropdownWrapper>
      <StyledStatusFilterButton className={expanded ? 'expanded' : ''} onClick={handleClick}>
        Filter by status
        <ChevronIcon />
      </StyledStatusFilterButton>

      {expanded && (
        <StatusFilterDropdown />
      )}
    </FilterDropdownWrapper>
  );
};
