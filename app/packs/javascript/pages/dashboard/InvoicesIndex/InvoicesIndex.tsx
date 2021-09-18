import React from 'react';
import { Title } from '../../../components/Title'
import { PlusIcon } from '../../../icons/PlusIcon'
import { PrimaryButton } from '../../../components/PrimaryButton'
import { InvoicesFilter } from '../../../components/InvoicesFilter'
import { InvoicesBody } from '../../../components/InvoicesBody'
import {
  MainContainer,
  Heading,
  HeadingTitle,
  HeadingActions,
  InvoiceCountText
} from './InvoicesIndex.styled'
import { useBreakpoint } from '../../../hooks/useBreakpoint'

export const InvoicesIndex = () => {
  const { mobile } = useBreakpoint()

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
            { mobile ? "New" : "New Invoice" }
          </PrimaryButton>
        </HeadingActions>
      </Heading>

      <InvoicesBody />
    </MainContainer>
  )
}
