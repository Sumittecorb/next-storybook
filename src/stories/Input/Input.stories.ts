import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
const meta = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'UserName',
        placeholder: "UserName",
        type: 'text',
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Password',
        placeholder: "Password",
        type: 'password',
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Phone Number',
        placeholder: "Phone",
        type: 'email',
    },
};


