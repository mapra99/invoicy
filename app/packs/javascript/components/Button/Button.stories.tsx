import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '.';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => {
  const { label, ...params } = args;

  return (
    <Button {...params}>
      { label }
    </Button>
  );
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'Button',
};
