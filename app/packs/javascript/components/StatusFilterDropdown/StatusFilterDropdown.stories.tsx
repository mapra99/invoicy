import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { StatusFilterDropdown } from '.';

export default {
  title: 'Components/StatusFilterDropdown',
  component: StatusFilterDropdown,
} as ComponentMeta<typeof StatusFilterDropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StatusFilterDropdown> = (args) => (
  <StatusFilterDropdown {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
