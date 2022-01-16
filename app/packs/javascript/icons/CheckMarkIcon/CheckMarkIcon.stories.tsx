import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CheckMarkIcon } from '.';

export default {
  title: 'Icons/CheckMarkIcon',
  component: CheckMarkIcon,
} as ComponentMeta<typeof CheckMarkIcon>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckMarkIcon> = (args) => (
  <CheckMarkIcon {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  width: '100',
  height: '100',
  fill: 'MEDIUM_SLATE_BLUE',
};
