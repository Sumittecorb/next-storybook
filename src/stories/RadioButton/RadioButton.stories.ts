import type { Meta, StoryObj } from '@storybook/react';
import { RadioButton } from './RadioButton';
const meta = {
    title: 'Components/RadioButton',
    component: RadioButton,
    tags: ['autodocs'],
} satisfies Meta<typeof RadioButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const UpperDesign: Story = {
    args: {
        checkedImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ic_radio_button_on_48px.svg/1200px-Ic_radio_button_on_48px.svg.png',
        unCheckedImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ic_radio_button_off_48px.svg/1200px-Ic_radio_button_off_48px.svg.png',
        design: 'upper',
        htmlForId: 'male',
        label: 'Male',
        value: 'male',
        radioBtnName: 'address',
    },
};
export const MediumDesign: Story = {
    args: {
        checkedImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ic_radio_button_on_48px.svg/1200px-Ic_radio_button_on_48px.svg.png',
        unCheckedImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ic_radio_button_off_48px.svg/1200px-Ic_radio_button_off_48px.svg.png',
        design: 'medium',
        htmlForId: 'female',
        label: 'Female',
        value: 'female',
        radioBtnName: 'address',
    },
};
export const LowerDesign: Story = {
    args: {
        checkedImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Ic_radio_button_on_48px.svg/1200px-Ic_radio_button_on_48px.svg.png',
        unCheckedImage: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Ic_radio_button_off_48px.svg/1200px-Ic_radio_button_off_48px.svg.png',
        design: 'lower',
        htmlForId: 'others',
        label: 'Others',
        value: 'others',
        radioBtnName: 'address',
    },
};


