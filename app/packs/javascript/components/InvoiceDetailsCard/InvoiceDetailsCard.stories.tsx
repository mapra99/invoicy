import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import invoice from '../../mocks/api/invoice.json';

import { InvoiceDetailsCard } from '.';

export default {
  title: 'Components/InvoiceDetailsCard',
  component: InvoiceDetailsCard,
} as ComponentMeta<typeof InvoiceDetailsCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InvoiceDetailsCard> = (args) => (
  <InvoiceDetailsCard {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  invoice,
};
