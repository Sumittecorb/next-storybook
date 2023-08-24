import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
const meta = {
    title: 'Components/Table',
    component: Table,
    tags: ['autodocs'],
} satisfies Meta<typeof Table>;
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




