import type { Meta, StoryObj } from '@storybook/react';
import { SearchInput } from './SearchInput';
const meta = {
    title: 'Components/SearchInput',
    component: SearchInput,
    tags: ['autodocs'],
} satisfies Meta<typeof SearchInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Search Something',
        placeholder: "Search Here.....",
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Search Something',
        placeholder: "Search Here.....",
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Search Something',
        placeholder: "Search Here.....",
    },
};


