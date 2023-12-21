import { StoryObj, Meta } from '@storybook/react';

import  Icon  from '../icon';

export default {
  title: 'UI/Icons',
  component: Icon,
} as Meta;

type Story =  StoryObj<typeof Icon> 

export const Large = {
  args: {
    size: 'large',
    type: 'normal',
  }
};

export const Small = {
  args: {
    size: 'small',
    type: 'normal',
  }
};
export const Sad: Story = {
  args: {
    type: 'sad',
  }
};

export const Angry: Story = {
  args: {
    type: 'angry',
  }
};

export const Normal: Story = {
  args: {
    type: 'normal',
  }
};

export const Happy: Story = {
  args: {
    type: 'happy',
  }
};

export const Funny: Story = {
  args: {
    type: 'funny',
  }
};


