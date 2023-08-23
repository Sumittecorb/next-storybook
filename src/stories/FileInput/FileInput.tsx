import React, { useMemo } from 'react';

interface InputProps {
    size?: 'small' | 'medium' | 'large';
    label?: string;
    imgSrc?: string;
}
const getMainContainerClasses = (size: string) => {
    switch (size) {
        case 'small': {
            return 'w-16 h-16';
        }
        case 'large': {
            return 'w-24 h-24';
        }
        default: {
            return 'w-20 h-20';
        }
    }
};
const getFileInputClasses = (size: string) => {
    switch (size) {
        case 'small': {
            return 'rounded-lg';
        }
        case 'large': {
            return 'rounded-full';
        }
        default: {
            return 'rounded-2xl';
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
export const FileInput = ({ size = 'medium', label, imgSrc, ...props }: InputProps) => {
    const computedFileInputClasses = useMemo(() => {
        const sizeClass = getFileInputClasses(size);
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
            <div className='mt-5'>
                <label className={`${computedLabelClasses} block mb-2`} htmlFor='username' >{label}</label>
                <div className={`relative ${computedMainContainerClasses} overflow-hidden ${computedFileInputClasses}`}>
                    <input type="file" className={`${computedMainContainerClasses} p-24 absolute top-0 left-0 cursor-pointer`} />
                    <div className={`${computedMainContainerClasses}`}>
                        <img src={imgSrc} className='w-full h-full' />
                    </div>
                </div>
            </div>
        </>
    );
};