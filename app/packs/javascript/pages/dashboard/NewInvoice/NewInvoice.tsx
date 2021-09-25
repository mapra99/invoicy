import React from 'react'
import { GoBackButton } from '../../../components/GoBackButton'
import { Title } from '../../../components/Title'
import { InvoiceForm } from '../../../components/InvoiceForm'
import {
  NewInvoiceContainer,
  NewInvoiceHeading
} from './NewInvoice.styled'

export const NewInvoice = () => (
  <NewInvoiceContainer>
    <GoBackButton />
    <NewInvoiceHeading>
      <Title>
        New Invoice
      </Title>
    </NewInvoiceHeading>
    
    <InvoiceForm />
  </NewInvoiceContainer>
)
