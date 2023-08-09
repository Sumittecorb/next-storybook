import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';

const meta = {
    title: 'Components/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LeftOpen: Story = {
    args: {
        leftOpen: true,
        menuList: ["Home", "About", "Services", "Portfolio", "Contact"],
    },
};

export const TopLeftOpen: Story = {
    args: {
        topLeftOpen: true,
        menuList: ["Home", "About", "Services", "Portfolio", "Contact"],
    },
};
