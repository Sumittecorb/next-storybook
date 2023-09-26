import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
const meta = {
    title: 'Components/Popover',
    component: Popover,
    tags: ['autodocs'],
} satisfies Meta<typeof Popover>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Upper: Story = {
    args: {
        design: 'upper',
    },
};

export const Medium: Story = {
    args: {
        design: 'medium',
    },
};
export const Simple: Story = {
    args: {
        design: 'simple',
    },
};






