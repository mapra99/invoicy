import { ReactNode } from 'react';

export interface InputGroupProps {
  label: string
  htmlFor?: string
  error?: string
  children: ReactNode
}
