import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './Footer';
const meta = {
    title: 'Components/Footer',
    component: Footer,
    tags: ['autodocs'],
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Black: Story = {
    args: {
        background: 'bgBlack',
        listHeadingColor: 'textGray',
        listColor: 'textGray',
    },
};
export const White: Story = {
    args: {
        background: 'bgWhite',
        listHeadingColor: 'textGray',
        listColor: 'textBlack',
    },
};
export const Gray: Story = {
    args: {
        background: 'bgGray',
        listHeadingColor: 'textGray',
        listColor: 'textGray',
    },
};


