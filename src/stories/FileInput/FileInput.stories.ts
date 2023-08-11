import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from './FileInput';
const meta = {
    title: 'Components/FileInput',
    component: FileInput,
    tags: ['autodocs'],
} satisfies Meta<typeof FileInput>;
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


