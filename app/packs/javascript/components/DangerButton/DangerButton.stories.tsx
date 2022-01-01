import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { DangerButton } from '.';

export default {
  title: 'Components/DangerButton',
  component: DangerButton,
} as ComponentMeta<typeof DangerButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  const { label, ...params } = args;

  return (
    <DangerButton {...params}>
      { label }
    </DangerButton>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Button',
};
