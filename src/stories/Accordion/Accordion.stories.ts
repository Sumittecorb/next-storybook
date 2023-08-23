import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
const meta = {
    title: 'Components/Accordion',
    component: Accordion,
    tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
    args: {
        design: 'simple',
    },
};
export const Medium: Story = {
    args: {
        design: 'medium',
    },
};
export const Upper: Story = {
    args: {
        design: 'upper',
    },
};


