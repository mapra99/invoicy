import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import invoice from '../../mocks/api/invoice.json';

import { InvoiceItemsList } from '.';

export default {
  title: 'Components/InvoiceItemsList',
  component: InvoiceItemsList,
} as ComponentMeta<typeof InvoiceItemsList>;

const Template: ComponentStory<typeof InvoiceItemsList> = (args) => (
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  <InvoiceItemsList {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  items: invoice.items,
  totalPrice: invoice.totalPrice,
  currency: invoice.currency,
};
