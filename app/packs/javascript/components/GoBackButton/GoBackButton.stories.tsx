import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GoBackButton } from '.';

export default {
  title: 'Components/GoBackButton',
  component: GoBackButton,
} as ComponentMeta<typeof GoBackButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof GoBackButton> = (args) => (
  <GoBackButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
