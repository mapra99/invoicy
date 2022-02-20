import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import invoice from '../../mocks/api/invoice.json';

import { EditInvoiceButton } from '.';

export default {
  title: 'Components/EditInvoiceButton',
  component: EditInvoiceButton,
} as ComponentMeta<typeof EditInvoiceButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditInvoiceButton> = (args) => (
  <EditInvoiceButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  invoice,
};
