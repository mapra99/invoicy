import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DeleteInvoiceButton } from '.';

export default {
  title: 'Components/DeleteInvoiceButton',
  component: DeleteInvoiceButton,
} as ComponentMeta<typeof DeleteInvoiceButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DeleteInvoiceButton> = (args) => (
  <DeleteInvoiceButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  uuid: 'XM9141',
};
