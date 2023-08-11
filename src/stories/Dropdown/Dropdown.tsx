import React, { useMemo } from 'react';

interface DropdownProps {
    size?: 'small' | 'medium' | 'large';
    label?: string;
    dropdownList?: any;
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
const getDropdownSizeClasses = (size: string) => {
    switch (size) {
        case 'small': {
            return 'bg-red-200 placeholder-red-400 text-red-400 focus:border-red-400';
        }
        case 'large': {
            return 'bg-gray-200 placeholder-gray-400 text-gray-400 focus:border-gray-400';
        }
        default: {
            return 'bg-sky-200 placeholder-sky-400 text-sky-400 focus:border-sky-400';
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
const dropdownCommonClass = "block appearance-none bg-gray-200 border w-full border-gray-200 cursor-pointer text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white"
export const Dropdown = ({ size = 'medium', label, dropdownList, ...props }: DropdownProps) => {
    const computedDropdownClasses = useMemo(() => {
        const sizeClass = getDropdownSizeClasses(size);
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
            <div className={`${computedMainContainerClasses} mb-5`}>
                <label className={`${computedLabelClasses} block mb-2`} htmlFor="state">
                    {label}
                </label>
                <div className="relative">
                    <select className={`${computedDropdownClasses} ${dropdownCommonClass}`} id="state">
                        {
                            dropdownList.map((listItem: any) => {
                                return (
                                    <>
                                        <option>{listItem}</option>
                                    </>
                                )
                            })
                        }
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
            </div>
        </>
    );
};