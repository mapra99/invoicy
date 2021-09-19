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

  return (
    <InvoicesBodyWrapper>
      { invoices.map(invoice => (
        <Text>{invoice.uuid}</Text>
      )) }

      { loading && (
        <LoadingSpinnerWrapper>
          <LoadingSpinner />
        </LoadingSpinnerWrapper>
      )}
    </InvoicesBodyWrapper>
  )
}
