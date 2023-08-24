import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
const meta = {
    title: 'Components/Modal',
    component: Modal,
    tags: ['autodocs'],
} satisfies Meta<typeof Modal>;
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




