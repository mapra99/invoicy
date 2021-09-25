import React from 'react';
import { ChevronIcon } from '../../icons/ChevronIcon'
import {
  InvoicesFilterButton,
  IconWrapper
} from './InvoicesFilter.styled'
import { useBreakpoint } from '../../hooks/useBreakpoint'

// TODO: Add actual dropdown filter options
export const InvoicesFilter = () => {
  const { mobile } = useBreakpoint();

  return (
    <InvoicesFilterButton>
      { mobile ? "Filter" : "Filter by status" }
      <IconWrapper>
        <ChevronIcon />
      </IconWrapper>
    </InvoicesFilterButton>
  )
}
