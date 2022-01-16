import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusFilterButton } from '.';

export default {
  title: 'Components/StatusFilterButton',
  component: StatusFilterButton,
} as ComponentMeta<typeof StatusFilterButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatusFilterButton> = (args) => (
  <StatusFilterButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
