import React from 'react'
import { EmptyFeedBannerProps } from './types'
import { EmptyFeedIcon } from '../../icons/EmptyFeedIcon'
import {
  EmptyFeedBannerContainer,
  EmptyFeedText,
  EmptyFeedTitle
} from './EmptyFeedBanner.styled'

export const EmptyFeedBanner = ({ invoiceButtonText }: EmptyFeedBannerProps) => (
  <EmptyFeedBannerContainer>
    <EmptyFeedIcon />
    <EmptyFeedTitle as="h2">
      There is nothing here
    </EmptyFeedTitle>
    <EmptyFeedText>
      Create an invoice by clicking the <b>{invoiceButtonText}</b> button and get started
    </EmptyFeedText>
  </EmptyFeedBannerContainer>
)
