import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Card } from '.';
import { Text } from '../Text';

export default {
  title: 'Components/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <Text>
      Excepteur reprehenderit ea eiusmod sint ullamco elit. Ut Lorem duis in cillum aliqua qui
      ipsum. Anim duis aute ullamco cillum deserunt eiusmod aute.
      Et velit ad et excepteur nisi. Proident laborum velit culpa labore officia fugiat veniam. Ex
      minim pariatur incididunt duis ipsum ipsum sint laboris id culpa eu nulla pariatur. Cillum eu
      veniam culpa et magna cillum in elit eiusmod.
    </Text>
  </Card>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  shadow: true,
  hover: true,
};
