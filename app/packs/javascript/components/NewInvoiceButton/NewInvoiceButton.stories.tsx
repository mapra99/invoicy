import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NewInvoiceButton } from '.';

export default {
  title: 'Components/NewInvoiceButton',
  component: NewInvoiceButton,
} as ComponentMeta<typeof NewInvoiceButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewInvoiceButton> = (args) => (
  <NewInvoiceButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
