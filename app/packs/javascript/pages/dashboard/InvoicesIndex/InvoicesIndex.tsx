import React, { useContext } from 'react';
import { InvoicesContext } from '../../../contexts/InvoicesContext'
import { Title } from '../../../components/Title'
import { NewInvoiceButton } from '../../../components/NewInvoiceButton'
import { InvoicesFilter } from '../../../components/InvoicesFilter'
import { InvoicesBody } from '../../../components/InvoicesBody'
import { MainContainer } from '../../../components/MainContainer'
import {
  Heading,
  HeadingTitle,
  HeadingActions,
  InvoiceCountText
} from './InvoicesIndex.styled'
import { useBreakpoint } from '../../../hooks/useBreakpoint'

export const InvoicesIndex = () => {
  const { mobile } = useBreakpoint()
  const { invoices, loading } = useContext(InvoicesContext)

  let countText = mobile ? `${invoices.length} invoices` : `There are ${invoices.length} total invoices`
  if(invoices.length === 0) countText = "No Invoices"

  return (
    <MainContainer>
      <Heading>
        <HeadingTitle>
          <Title>Invoices</Title>
          <InvoiceCountText>
            { !loading && countText }
          </InvoiceCountText>
        </HeadingTitle>
  
        <HeadingActions>
          <InvoicesFilter />
          <NewInvoiceButton />
        </HeadingActions>
      </Heading>

      <InvoicesBody />
    </MainContainer>
  )
}
