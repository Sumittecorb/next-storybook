import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
const meta = {
    title: 'Components/Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;
export default meta;
type Story = StoryObj<typeof meta>;

export const UpperDesign: Story = {
    args: {
        type: 'checkbox',
        checkedImage: 'https://user-images.githubusercontent.com/11351528/51387695-f564d000-1b4c-11e9-817d-5e6280f997d0.png',
        unCheckedImage: 'https://e7.pngegg.com/pngimages/716/420/png-clipart-checkbox-rectangle-square-computer-icons-checkboxes-angle-check-mark-thumbnail.png',
        design: 'upper',
        idForName: 'vehical1',
        label: 'Bike',
        value: 'Bike',
    },
};
export const MediumDesign: Story = {
    args: {
        type: 'checkbox',
        checkedImage: 'https://user-images.githubusercontent.com/11351528/51387695-f564d000-1b4c-11e9-817d-5e6280f997d0.png',
        unCheckedImage: 'https://e7.pngegg.com/pngimages/716/420/png-clipart-checkbox-rectangle-square-computer-icons-checkboxes-angle-check-mark-thumbnail.png',
        design: 'medium',
        idForName: 'vehical2',
        label: 'Car',
        value: 'Car',
    },
};
export const LowerDesign: Story = {
    args: {
        type: 'checkbox',
        checkedImage: 'https://user-images.githubusercontent.com/11351528/51387695-f564d000-1b4c-11e9-817d-5e6280f997d0.png',
        unCheckedImage: 'https://e7.pngegg.com/pngimages/716/420/png-clipart-checkbox-rectangle-square-computer-icons-checkboxes-angle-check-mark-thumbnail.png',
        design: 'lower',
        idForName: 'vehical3',
        label: 'Bus',
        value: 'Car',
    },
};


