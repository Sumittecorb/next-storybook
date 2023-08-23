import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
const meta = {
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'Choose File',
        imgSrc: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Choose File',
        imgSrc: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Choose File',
        imgSrc: "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    },
};


