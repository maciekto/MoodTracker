import { StoryObj, Meta } from '@storybook/react';

import  MoodDialog from '../MoodDialog';

export default {
  title: 'mood/MoodDialog',
  component: MoodDialog,
} as Meta;

type Story =  StoryObj<typeof MoodDialog> 

export const Default: Story = {
  args: {
    open: true,
    onClose: () => {},
    onSubmit: () => {},
  }
};


