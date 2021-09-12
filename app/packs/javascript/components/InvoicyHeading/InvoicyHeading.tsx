import React from 'react'
import { Title } from '../Title'
import { InvoicyIcon } from '../../icons/InvoicyIcon'
import {
  InvoicyHeadingContainer
} from './InvoicyHeading.styled'

export const InvoicyHeading = () => (
  <InvoicyHeadingContainer>
      <InvoicyIcon />
      <Title>invoicy</Title>
  </InvoicyHeadingContainer>
)
