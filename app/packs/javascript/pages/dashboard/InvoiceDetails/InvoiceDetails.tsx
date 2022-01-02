import React from 'react';
import { MainContainer } from '../../../components/MainContainer';
import { GoBackButton } from '../../../components/GoBackButton'
import { InvoiceDetailsBody } from '../../../components/InvoiceDetailsBody'

export const InvoiceDetails = () => (
  <MainContainer>
    <GoBackButton />
    <InvoiceDetailsBody />
  </MainContainer>
);
