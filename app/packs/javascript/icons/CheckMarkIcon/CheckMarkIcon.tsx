import React from 'react';
import { CheckMarkIconProps } from './types';
import { COLORS } from '../../constants';

export const CheckMarkIcon = ({ width, height, fill }: CheckMarkIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 9"
    fill="none"
  >
    <path
      d="M1.5 4.49976L3.62425 6.62402L8.96995 1.27832"
      stroke={COLORS[fill || 'WHITE']}
      strokeWidth="2"
    />
  </svg>
);
