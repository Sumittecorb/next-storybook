import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';

const meta = {
    title: 'Components/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const halfClose: Story = {
    args: {
        halfClose: true,
        menuList: ["Home", "About", "Services", "Protfolio", "Vendor", "User", "Contact"]
    },
};
export const fullClose: Story = {
    args: {
        menuList: ["Home", "About", "Services", "Protfolio", "Vendor", "User", "Contact"]
    },
};

