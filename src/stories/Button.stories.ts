import type {Meta, StoryObj} from '@storybook/react';

import Button from '../components/Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Example/Button',
    component: Button,
    tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Button',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
        children: 'Button',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        children: 'Button',
    },
};
