import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InvoiceUuid } from '.';

export default {
  title: 'Components/InvoiceUuid',
  component: InvoiceUuid,
} as ComponentMeta<typeof InvoiceUuid>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InvoiceUuid> = (args) => (
  <InvoiceUuid {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: 'XM9141',
  as: 'h4',
};
