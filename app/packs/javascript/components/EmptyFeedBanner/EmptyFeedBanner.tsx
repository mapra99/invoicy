import React from 'react'
import { EmptyFeedIcon } from '../../icons/EmptyFeedIcon'
import {
  EmptyFeedBannerContainer,
  EmptyFeedText,
  EmptyFeedTitle
} from './EmptyFeedBanner.styled'
import { useBreakpoint } from '../../hooks/useBreakpoint'

export const EmptyFeedBanner = () => {
  const { mobile } = useBreakpoint();

  return (
    <EmptyFeedBannerContainer>
      <EmptyFeedIcon />
      <EmptyFeedTitle as="h2">
        There is nothing here
      </EmptyFeedTitle>
      <EmptyFeedText>
        Create an invoice by clicking the
        <b>{ mobile ? " New " : " New Invoice " }</b>
        button and get started
      </EmptyFeedText>
    </EmptyFeedBannerContainer>
  )
}
