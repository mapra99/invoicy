import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { SecondaryButton } from '.';

export default {
  title: 'Components/SecondaryButton',
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const { label, ...params } = args;

  return (
    <SecondaryButton {...params}>
      { label }
    </SecondaryButton>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Button',
};
