import styled from 'styled-components';
import { SecondaryButton } from '../SecondaryButton';

export const StyledStatusFilterButton = styled(SecondaryButton)`
  background: none;
  color: ${(props) => props.theme.text.primary};
  padding: 0;
  height: auto;
  display: flex;
  align-items: center;
  gap: 16px;

  &:hover {
    text-decoration: underline;
    background: none;
  }

  &.expanded {
    svg {
      transform: rotate(180deg);
    }
  }

  svg {
    width: 10px;
    height: 10px;
    transition: transform 0.1s;
  }
`;

export const FilterDropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const FilterDropdownOptionsWrapper = styled.div`
  position: absolute;
  max-width: 192px;
  top: 40px;
`;
