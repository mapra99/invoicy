import React, { useRef } from 'react';
import { useStatusFilter } from '../../hooks/useStatusFilter';
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
  const dropdownEl = useRef(null);
  const { expanded, handleClick } = useDropdownButton(dropdownEl);
  const { mobile } = useBreakpoint();
  const { statusesDetails, handleChange } = useStatusFilter();

  return (
    <FilterDropdownWrapper ref={dropdownEl}>
      <StyledStatusFilterButton className={expanded ? 'expanded' : ''} onClick={handleClick}>
        { mobile ? 'Filter' : 'Filter by status' }
        <ChevronIcon />
      </StyledStatusFilterButton>

      {expanded && (
        <FilterDropdownOptionsWrapper>
          <StatusFilterDropdown
            statuses={statusesDetails}
            onChange={handleChange}
          />
        </FilterDropdownOptionsWrapper>
      )}
    </FilterDropdownWrapper>
  );
};
