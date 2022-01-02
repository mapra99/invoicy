import React from 'react';
import { InvoiceAttributeProps } from './types';
import { Text } from '../Text';
import { Title } from '../Title';
import { InvoiceAttributeWrapper } from './InvoiceAttribute.styled';

export const InvoiceAttribute = ({ label, value }: InvoiceAttributeProps) => (
  <InvoiceAttributeWrapper>
    <Text color="tertiary">
      { label }
    </Text>
    <Title as="h3">
      { value }
    </Title>
  </InvoiceAttributeWrapper>
);
