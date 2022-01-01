import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { PrimaryButton } from '.';
import { PlusIcon } from '../../icons/PlusIcon';

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
} as ComponentMeta<typeof PrimaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const { label, ...params } = args;

  return (
    <PrimaryButton {...params}>
      { label }
    </PrimaryButton>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Button',
};

export const WithIcon = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithIcon.args = {
  label: 'Button',
  icon: <PlusIcon />
};

