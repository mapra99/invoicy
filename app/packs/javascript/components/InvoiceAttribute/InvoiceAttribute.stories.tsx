import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InvoiceAttribute } from '.';

export default {
  title: 'Components/InvoiceAttribute',
  component: InvoiceAttribute,
} as ComponentMeta<typeof InvoiceAttribute>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InvoiceAttribute> = (args) => (
  <InvoiceAttribute {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Invoice Date',
  value: '21 Aug 2021',
};
