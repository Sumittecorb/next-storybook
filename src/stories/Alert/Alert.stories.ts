import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta = {
    title: 'Components/Alert',
    component: Alert,
    tags: ['autodocs'],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Traditional: Story = {
    args: {
        Traditional: true,
        user: "Hello Aman",
        error: "Something seriously bad happened.",
    },
};

export const LeftAccentBorder: Story = {
    args: {
        user: "Hello Mohit",
        error: "Something seriously bad happened.",
    },
};

