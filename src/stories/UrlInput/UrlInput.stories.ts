import type { Meta, StoryObj } from '@storybook/react';
import { UrlInput } from './UrlInput';
const meta = {
    title: 'Components/UrlInput',
    component: UrlInput,
    tags: ['autodocs'],
} satisfies Meta<typeof UrlInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Add your URL',
        placeholder: "https://www.google.com/",
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Add your URL',
        placeholder: "https://www.google.com/",
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Add your URL',
        placeholder: "https://www.google.com/",
    },
};


