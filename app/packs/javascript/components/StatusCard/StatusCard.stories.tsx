import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import invoice from '../../mocks/api/invoice.json';
import draftInvoice from '../../mocks/api/draftInvoice.json';

import { StatusCard } from '.';

export default {
  title: 'Components/StatusCard',
  component: StatusCard,
} as ComponentMeta<typeof StatusCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatusCard> = (args) => (
  <StatusCard {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  invoice,
};

export const ForDraftInvoice = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ForDraftInvoice.args = {
  invoice: draftInvoice,
};
