import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '.';

export default {
  title: 'Components/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => (
  <Text {...args}>
    Excepteur reprehenderit ea eiusmod sint ullamco elit. Ut Lorem duis in cillum aliqua qui ipsum.
    Anim duis aute ullamco cillum deserunt eiusmod aute.
    Et velit ad et excepteur nisi. Proident laborum velit culpa labore officia fugiat veniam. Ex
    minim pariatur incididunt duis ipsum ipsum sint laboris id culpa eu nulla pariatur. Cillum eu
    veniam culpa et magna cillum in elit eiusmod.
  </Text>
);

export const Body1 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Body1.args = {
  type: 'body1',
};

export const Body2 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Body2.args = {
  type: 'body2',
};
