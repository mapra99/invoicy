import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChevronIcon } from '../../icons/ChevronIcon';
import {
  StyledGoBackButton,
  GoBackButtonIconWrapper,
} from './GoBackButton.styled';

export const GoBackButton = () => {
  const history = useHistory();

  return (
    <StyledGoBackButton onClick={() => history.goBack()}>
      <GoBackButtonIconWrapper>
        <ChevronIcon />
      </GoBackButtonIconWrapper>

      Go back
    </StyledGoBackButton>
  );
};
