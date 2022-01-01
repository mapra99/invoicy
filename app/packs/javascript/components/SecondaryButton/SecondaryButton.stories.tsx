import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SecondaryButton } from '.';
import { PlusIcon } from '../../icons/PlusIcon';

export default {
  title: 'Components/SecondaryButton',
  component: SecondaryButton,
} as ComponentMeta<typeof SecondaryButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SecondaryButton> = (args) => {
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
