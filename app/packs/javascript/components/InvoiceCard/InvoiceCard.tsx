import React from 'react'
import { InvoiceCardProps } from './types'
import {
  InvoiceCardWrapper
} from './InvoiceCard.styled'

export const InvoiceCard = ({ invoice }: InvoiceCardProps) => (
  <InvoiceCardWrapper>
    {invoice.uuid}
  </InvoiceCardWrapper>
)
