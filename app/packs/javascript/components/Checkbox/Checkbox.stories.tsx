import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Checkbox } from '.';

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Unchecked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Unchecked.args = {
  value: '0',
  name: 'checkbox_name',
  label: 'Checkbox Label',
  checked: false,
};

export const Checked = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Checked.args = {
  value: '0',
  name: 'checkbox_name',
  label: 'Checkbox Label',
  checked: true,
};
