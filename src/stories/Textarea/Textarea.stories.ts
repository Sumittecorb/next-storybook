import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
const meta = {
    title: 'Components/Textarea',
    component: Textarea,
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Address',
        placeholder: "Address",
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Address',
        placeholder: "Address",
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Address',
        placeholder: "Address",
    },
};


