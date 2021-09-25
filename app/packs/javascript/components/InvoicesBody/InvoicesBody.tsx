import React, { useContext } from 'react'
import { InvoicesContext } from '../../contexts/InvoicesContext'
import { EmptyFeedBanner } from '../EmptyFeedBanner'
import { InvoiceCard } from '../InvoiceCard'
import {
  InvoicesBodyWrapper,
  LoadingSpinnerWrapper
} from './InvoicesBody.styled'
import { LoadingSpinner } from '../../icons/LoadingSpinner'
import { Text } from '../Text'

export const InvoicesBody = () => {
  const { invoices, loading } = useContext(InvoicesContext)

  if (invoices.length === 0) return (
    <InvoicesBodyWrapper>
      <EmptyFeedBanner />
    </InvoicesBodyWrapper>
  )

  return (
    <InvoicesBodyWrapper>
      { invoices.map(invoice => (
        <InvoiceCard
          key={invoice.id}
          invoice={invoice}
        />
      )) }

      { loading && (
        <LoadingSpinnerWrapper>
          <LoadingSpinner />
        </LoadingSpinnerWrapper>
      )}
    </InvoicesBodyWrapper>
  )
}
