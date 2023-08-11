import type { Meta, StoryObj } from '@storybook/react';
import { DateInput } from './DateInput';
const meta = {
    title: 'Components/DateInput',
    component: DateInput,
    tags: ['autodocs'],
} satisfies Meta<typeof DateInput>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'UserName',
        type: 'date',
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Password',
        type: 'date',
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Phone Number',
        type: 'date',
    },
};


