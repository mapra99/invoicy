import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InvoiceStatus } from '.';

export default {
  title: 'Components/InvoiceStatus',
  component: InvoiceStatus,
} as ComponentMeta<typeof InvoiceStatus>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InvoiceStatus> = (args) => (
  <InvoiceStatus {...args} />
);

export const Draft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Draft.args = {
  status: 'draft',
};

export const Pending = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Pending.args = {
  status: 'pending',
};

export const Paid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Paid.args = {
  status: 'paid',
};
