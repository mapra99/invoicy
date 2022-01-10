import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InvoiceMarkAsPaidButton } from '.';

export default {
  title: 'Components/InvoiceMarkAsPaidButton',
  component: InvoiceMarkAsPaidButton,
} as ComponentMeta<typeof InvoiceMarkAsPaidButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InvoiceMarkAsPaidButton> = (args) => (
  <InvoiceMarkAsPaidButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  uuid: 'XM9141',
};
