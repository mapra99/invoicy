import React from 'react';
import { TrinityRingsSpinner } from 'react-epic-spinners';
import { LoadingSpinnerProps } from './types';
import { COLORS } from '../../constants'

const { MEDIUM_SLATE_BLUE } = COLORS;

export const LoadingSpinner = (props: LoadingSpinnerProps) => (
  <TrinityRingsSpinner
    color={props.color || MEDIUM_SLATE_BLUE}
    {...props}
  />
)
