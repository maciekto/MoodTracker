import { StoryObj, Meta } from '@storybook/react';

import  IconWithText  from '../iconWithText';

export default {
  title: 'UI/IconsWithText',
  component: IconWithText,
} as Meta;

type Story =  StoryObj<typeof IconWithText> 

export const Vertical = {
  args: {
    size: 'default',
    type: 'normal',
    children: 'Vertical',
    vertical: true
  } 
};
  
export const Large = {
  args: {
    size: 'large',
    type: 'normal',
    children: 'Large'
  }
};

export const Small = {
  args: {
    size: 'small',
    type: 'normal',
    children: 'Small'
  }
};


export const Sad: Story = {
  args: {
    type: 'sad',
    children: 'Sad'
  }
};

export const Angry: Story = {
  args: {
    type: 'angry',
    children: 'Angry'
  }
};

export const Normal: Story = {
  args: {
    type: 'normal',
    children: 'Normal'
  }
};

export const Happy: Story = {
  args: {
    type: 'happy',
    children: 'Happy'
  }
};

export const Funny: Story = {
  args: {
    type: 'funny',
  }
};


