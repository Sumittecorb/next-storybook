import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';
const meta = {
    title: 'Components/Spinner',
    component: Spinner,
    tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;
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






