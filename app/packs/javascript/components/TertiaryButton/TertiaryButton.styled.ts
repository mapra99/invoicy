import styled from 'styled-components';
import { Button } from '../Button';
import { COLORS } from '../../constants'

const { SPACE_CADET_GREY, RICH_BLACK, COOL_GREY } = COLORS;

export const TertiaryButton = styled(Button)`
  background-color: ${SPACE_CADET_GREY};
  color: ${COOL_GREY};

  &:hover {
    background-color: ${RICH_BLACK};
  }
`
