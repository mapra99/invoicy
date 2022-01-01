import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { TransparentButton } from '.';

export default {
  title: 'Components/TransparentButton',
  component: TransparentButton,
} as ComponentMeta<typeof TransparentButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const { label, ...params } = args;

  return (
    <TransparentButton {...params}>
      { label }
    </TransparentButton>
  );
};
export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Button',
};
