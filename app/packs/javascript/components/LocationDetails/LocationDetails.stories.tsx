import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import invoice from '../../mocks/api/invoice.json';

import { LocationDetails } from '.';

export default {
  title: 'Components/LocationDetails',
  component: LocationDetails,
} as ComponentMeta<typeof LocationDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LocationDetails> = (args) => (
  <LocationDetails {...args} />
);

export const LeftAligned = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LeftAligned.args = {
  location: invoice.user.location,
  align: 'start',
};

export const RightAligned = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RightAligned.args = {
  location: invoice.user.location,
  align: 'end',
};
