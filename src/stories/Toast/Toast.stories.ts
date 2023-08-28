import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
const meta = {
    title: 'Components/Toast',
    component: Toast,
    tags: ['autodocs'],
} satisfies Meta<typeof Toast>;
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






