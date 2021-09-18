import React from 'react';
import { Title } from '../../../components/Title'
import { PlusIcon } from '../../../icons/PlusIcon'
import { PrimaryButton } from '../../../components/PrimaryButton'
import { InvoicesFilter } from '../../../components/InvoicesFilter'
import { EmptyFeedBanner } from '../../../components/EmptyFeedBanner'
import {
  MainContainer,
  Heading,
  HeadingTitle,
  HeadingActions,
  InvoiceCountText,
  InvoicesBody
} from './InvoicesIndex.styled'
import { useBreakpoint } from '../../../hooks/useBreakpoint'

export const InvoicesIndex = () => {
  const { mobile } = useBreakpoint()
  const newInvoiceButtonText = mobile ? "New" : "New Invoice"

  return (
    <MainContainer>
      <Heading>
        <HeadingTitle>
          <Title>Invoices</Title>
          <InvoiceCountText>
            { mobile ? "7 invoices" : "There are 7 total invoices" }
          </InvoiceCountText>
        </HeadingTitle>
  
        <HeadingActions>
          <InvoicesFilter />
          <PrimaryButton icon={<PlusIcon />}>
            { newInvoiceButtonText }
          </PrimaryButton>
        </HeadingActions>
      </Heading>

      <InvoicesBody>
        <EmptyFeedBanner invoiceButtonText={newInvoiceButtonText} />
      </InvoicesBody>
    </MainContainer>
  )
}
