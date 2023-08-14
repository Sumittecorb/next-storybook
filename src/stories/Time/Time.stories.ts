import type { Meta, StoryObj } from '@storybook/react';
import { Time } from './Time';
const meta = {
    title: 'Components/Time',
    component: Time,
    tags: ['autodocs'],
} satisfies Meta<typeof Time>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Select a Time',
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Select a Time',
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Select a Time',
    },
};


