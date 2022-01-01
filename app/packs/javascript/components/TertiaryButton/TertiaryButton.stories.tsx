import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { TertiaryButton } from '.';

export default {
  title: 'Components/TertiaryButton',
  component: TertiaryButton,
} as ComponentMeta<typeof TertiaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const { label, ...params } = args;

  return (
    <TertiaryButton {...params}>
      { label }
    </TertiaryButton>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Button',
};
