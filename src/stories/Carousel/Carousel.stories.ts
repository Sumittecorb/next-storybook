import type { Meta, StoryObj } from '@storybook/react';
import { Carousel } from './Carousel';
const meta = {
    title: 'Components/Carousel',
    component: Carousel,
    tags: ['autodocs'],
} satisfies Meta<typeof Carousel>;
export default meta;
type Story = StoryObj<typeof meta>;
export const SingleSlide: Story = {
    args: {
        design: 'SingleSlide',
    },
};

export const DoubleSlide: Story = {
    args: {
        design: 'DoubleSlide',
    },
};
export const TripalSlide: Story = {
    args: {
        design: 'TripalSlide',
    },
};






