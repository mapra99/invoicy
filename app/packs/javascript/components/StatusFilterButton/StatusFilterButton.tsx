import React from 'react';
import { useDropdownButton } from '../../hooks/useDropdownButton';
import { useBreakpoint } from '../../hooks/useBreakpoint';
import { StatusFilterDropdown } from '../StatusFilterDropdown';
import { ChevronIcon } from '../../icons/ChevronIcon';
import {
  StyledStatusFilterButton,
  FilterDropdownWrapper,
  FilterDropdownOptionsWrapper,
} from './StatusFilterButton.styled';

export const StatusFilterButton = () => {
  const { expanded, handleClick } = useDropdownButton();
  const { mobile } = useBreakpoint();

  return (
    <FilterDropdownWrapper>
      <StyledStatusFilterButton className={expanded ? 'expanded' : ''} onClick={handleClick}>
        { mobile ? 'Filter' : 'Filter by status' }
        <ChevronIcon />
      </StyledStatusFilterButton>

      {expanded && (
        <FilterDropdownOptionsWrapper>
          <StatusFilterDropdown />
        </FilterDropdownOptionsWrapper>
      )}
    </FilterDropdownWrapper>
  );
};
