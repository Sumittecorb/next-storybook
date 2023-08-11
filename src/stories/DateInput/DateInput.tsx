import React, { useMemo } from 'react';

interface DateInputProps {
    size?: 'small' | 'medium' | 'large';
    label: string;
    type?: string;
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
const getDateInputSizeClasses = (size: string) => {
    switch (size) {
        case 'small': {
            return 'bg-red-200 placeholder-red-400 text-red-400';
        }
        case 'large': {
            return 'bg-gray-200 placeholder-gray-400 text-gray-400';
        }
        default: {
            return 'bg-sky-200 placeholder-sky-400 text-sky-400';
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
const dateInputCommonClass = "appearance-none border rounded h-12 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
export const DateInput = ({ size = 'medium', label, type, ...props }: DateInputProps) => {
    const computedDateInputClasses = useMemo(() => {
        const sizeClass = getDateInputSizeClasses(size);
        return [sizeClass].join(' ');
    }, [size]);
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
                <label className={`${computedLabelClasses} block mb-2`} htmlFor='username' >{label}</label>
                <input type={type} id="username" className={`${computedDateInputClasses} ${dateInputCommonClass}`} />
            </div>
        </>
    );
};