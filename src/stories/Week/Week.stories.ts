import type { Meta, StoryObj } from '@storybook/react';
import { Week } from './Week';
const meta = {
    title: 'Components/Week',
    component: Week,
    tags: ['autodocs'],
} satisfies Meta<typeof Week>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Select a week',
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Select a week',
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Select a week',
    },
};


