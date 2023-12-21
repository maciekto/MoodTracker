import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ButtonProps, Button } from '../button';

export default {
  title: 'UI/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} >Storybook stories </Button>;

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
};

export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
    
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline'
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary'
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost'
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'default',
  disabled: true,
};
