import styled from 'styled-components';
import { Button } from '../Button';
import { COLORS } from '../../constants'

const { MEDIUM_SLATE_BLUE, MEDIUM_PURPLE, WHITE } = COLORS;

export const StyledPrimaryButton = styled(Button)`
  background-color: ${MEDIUM_SLATE_BLUE};
  color: ${WHITE};

  &:hover {
    background-color: ${MEDIUM_PURPLE};
  }
`

export const PrimaryButtonIconWrapper = styled.div`
  background-color: ${WHITE};
  border-radius: 50%;
  color: ${MEDIUM_SLATE_BLUE};
  display: inline-block;
  font-size: 18px;
  height: 32px;
  line-height: 32px;
  margin: 0 16px 0 -16px;
  text-align: center;
  width: 32px;

  svg {
    width: 10px;
    height: 10px;
    color: ${MEDIUM_SLATE_BLUE};
    fill: ${MEDIUM_SLATE_BLUE};

    path {
      fill: ${MEDIUM_SLATE_BLUE};
    }
  }
`
