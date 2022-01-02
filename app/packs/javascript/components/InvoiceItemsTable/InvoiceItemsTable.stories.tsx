import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import invoice from '../../mocks/api/invoice.json';

import { InvoiceItemsTable } from '.';

export default {
  title: 'Components/InvoiceItemsTable',
  component: InvoiceItemsTable,
} as ComponentMeta<typeof InvoiceItemsTable>;

const Template: ComponentStory<typeof InvoiceItemsTable> = (args) => (
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  <InvoiceItemsTable {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: invoice.items,
  totalPrice: invoice.totalPrice,
  currency: invoice.currency,
};
