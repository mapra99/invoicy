import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InvoiceDeletionModal } from '.';

export default {
  title: 'Components/InvoiceDeletionModal',
  component: InvoiceDeletionModal,
} as ComponentMeta<typeof InvoiceDeletionModal>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof InvoiceDeletionModal> = (args) => (
  <InvoiceDeletionModal {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  uuid: 'XM9141',
};
