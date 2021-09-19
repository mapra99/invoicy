import React, { useContext } from 'react'
import { InvoicesContext } from '../../contexts/InvoicesContext'
import { EmptyFeedBanner } from '../EmptyFeedBanner'
import {
  InvoicesBodyWrapper,
  LoadingSpinnerWrapper
} from './InvoicesBody.styled'
import { LoadingSpinner } from '../../icons/LoadingSpinner'
import { Text } from '../Text'

export const InvoicesBody = () => {
  const { invoices, loading } = useContext(InvoicesContext)

  if (loading) return (
    <InvoicesBodyWrapper>
      <LoadingSpinnerWrapper>
        <LoadingSpinner />
      </LoadingSpinnerWrapper>
    </InvoicesBodyWrapper>
  )

  if (invoices.length === 0) return (
    <InvoicesBodyWrapper>
      <EmptyFeedBanner />
    </InvoicesBodyWrapper>
  )

  return (
    <InvoicesBodyWrapper>
      { invoices.map(invoice => (
        <Text>{invoice.uuid}</Text>
      )) }
    </InvoicesBodyWrapper>
  )
}
