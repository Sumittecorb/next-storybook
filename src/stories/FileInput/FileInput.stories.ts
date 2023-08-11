import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from './FileInput';
const meta = {
    title: 'Components/FileInput',
    component: FileInput,
    tags: ['autodocs'],
} satisfies Meta<typeof FileInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'UserName',
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Password',
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Phone Number',
    },
};


