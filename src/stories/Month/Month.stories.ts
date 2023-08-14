import type { Meta, StoryObj } from '@storybook/react';
import { Month } from './Month';
const meta = {
    title: 'Components/Month',
    component: Month,
    tags: ['autodocs'],
} satisfies Meta<typeof Month>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Select a Month',
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Select a Month',
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Select a Month',
    },
};


