import React, { useMemo } from 'react';

interface TimeProps {
    size?: 'small' | 'medium' | 'large';
    label: string;
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
const getInputSizeClasses = (size: string) => {
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
const inputCommonClass = "appearance-none border rounded h-12 px-3 w-full leading-tight focus:outline-none focus:shadow-outline"
export const Time = ({ size = 'medium', label, ...props }: TimeProps) => {
    const computedInputClasses = useMemo(() => {
        const sizeClass = getInputSizeClasses(size);
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
                <label className={`${computedLabelClasses} block mb-2`} htmlFor='time' >{label}</label>
                <input type="time" id="time" name="time" className={`${computedInputClasses} ${inputCommonClass}`} />
            </div>
        </>
    );
};