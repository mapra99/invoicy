import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Title } from '.';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Title> = (args) => (
  <Title {...args}>
    Enim et est quis commodo magna.
  </Title>
);

export const Heading1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading1.args = {
  as: 'h1',
  color: 'primary',
};

export const Heading2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading2.args = {
  as: 'h2',
  color: 'primary',
};

export const Heading3 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading3.args = {
  as: 'h3',
  color: 'primary',
};

export const Heading4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Heading4.args = {
  as: 'h4',
  color: 'primary',
};
