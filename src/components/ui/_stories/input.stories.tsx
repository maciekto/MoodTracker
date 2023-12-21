import { StoryObj, Meta } from '@storybook/react';

import { Input, InputProps } from '../input';

export default {
  title: 'UI/Input',
  component: Input,
} as Meta;

type Story =  StoryObj<InputProps> 

export const Default: Story = {
  args: {
    placeholder: 'Default',
  }
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled',
    disabled: true,
  }
};


