import { ReactChild, ReactNode, ButtonHTMLAttributes } from 'react';

export interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactChild
  children: ReactNode
}
