import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
const meta = {
    title: 'Components/Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Large: Story = {
    args: {
        size: 'large',
        label: 'State',
        dropdownList: (['MP', 'UP']),
    },
};
export const Medium: Story = {
    args: {
        size: 'medium',
        label: 'Country',
        dropdownList: (['India', 'America']),
    },
};
export const Small: Story = {
    args: {
        size: 'small',
        label: 'Pin Code',
        dropdownList: (['843141', '843111']),
    },
};


