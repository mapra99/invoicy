import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SwitchThemeButton } from '.';

export default {
  title: 'Components/SwitchThemeButton',
  component: SwitchThemeButton,
} as ComponentMeta<typeof SwitchThemeButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SwitchThemeButton> = (args) => (
  <SwitchThemeButton {...args} />
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};
