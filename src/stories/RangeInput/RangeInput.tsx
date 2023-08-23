import React, { useMemo } from 'react';

interface RangeInputProps {
    size?: 'small' | 'medium' | 'large';
    label: string;
    placeholder?: string;
}
const getMainContainerClasses = (size: string) => {
    switch (size) {
        case 'small': {
            return 'w-1/2';
        }
        case 'large': {
            return 'w-full';
        }
        default: {
            return 'w-2/3';
        }
    }
};
const getLabelClasses = (size: string) => {
    switch (size) {
        case 'small': {
            return 'text-red-400';
        }
        case 'large': {
            return 'text-gray-400';
        }
        default: {
            return 'text-sky-400';
        }
    }
};
export const RangeInput = ({ size = 'medium', label, placeholder, ...props }: RangeInputProps) => {
    const computedLabelClasses = useMemo(() => {
        const sizeClass = getLabelClasses(size);
        return [sizeClass].join(' ');
    }, [size]);
    const computedMainContainerClasses = useMemo(() => {
        const sizeClass = getMainContainerClasses(size);
        return [sizeClass].join(' ');
    }, [size]);
    return (
        <>
            <div className={`${computedMainContainerClasses} mb-3`}>
                <label className={`${computedLabelClasses} block mb-2`} htmlFor='vol' >{label}</label>
                <input type="range" id="vol" name="vol" min="0" max="50" />
            </div>
        </>
    );
};