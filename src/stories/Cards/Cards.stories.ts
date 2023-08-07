import type { Meta, StoryObj } from '@storybook/react';
import { Cards } from './Cards';

const meta = {
    title: 'Components/Cards',
    component: Cards,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Cards>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Large: Story = {
    args: {
        primary: true,
        size: 'large',
        heading: 'Large Heading',
        paragraph: 'Large Cards',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
        heading: 'Small Heading',
        paragraph: 'Small Cards',
    },
};


