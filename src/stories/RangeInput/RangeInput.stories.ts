import type { Meta, StoryObj } from '@storybook/react';
import { RangeInput } from './RangeInput';
const meta = {
    title: 'Components/RangeInput',
    component: RangeInput,
    tags: ['autodocs'],
} satisfies Meta<typeof RangeInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Volume (between 0 and 50):',
        placeholder: "Search Here.....",
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Volume (between 0 and 50):',
        placeholder: "Search Here.....",
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Volume (between 0 and 50):',
        placeholder: "Search Here.....",
    },
};


