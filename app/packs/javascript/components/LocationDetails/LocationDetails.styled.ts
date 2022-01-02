import styled from 'styled-components';
import { LocationDetailsWrapperProps } from './types'

export const LocationDetailsWrapper = styled.div<LocationDetailsWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: ${(props) => props.align || 'start'};
`;
