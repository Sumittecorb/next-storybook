import React, { useMemo } from 'react';

interface CheckboxProps {
    type?: string;
    design?: 'lower' | 'medium' | 'upper';
    idForName?: string;
    checkedImage?: string;
    unCheckedImage?: string;
    label: string;
    value?: string;
    name?: string;

}
const getHeightWidthClasses = (design: string) => {
    switch (design) {
        case 'lower': {
            return 'w-5 h-5';
        }
        case 'medium': {
            return 'w-6 h-6';
        }
        default: {
            return 'w-7 h-7';
        }
    }
};
const getLabelClasses = (design: string) => {
    switch (design) {
        case 'lower': {
            return 'text-red-400 text-lg ml-6';
        }
        case 'medium': {
            return 'text-black text-lg ml-7';
        }
        default: {
            return 'text-sky-400 text-xl ml-8';
        }
    }
};

const positionCommonClass = "absolute left-0 cursor-pointer"
export const Checkbox = ({ type, design = 'medium', idForName, checkedImage, unCheckedImage, label, value, ...props }: CheckboxProps) => {
    const computedLabelClasses = useMemo(() => {
        const sizeClass = getLabelClasses(design);
        return [sizeClass].join(' ');
    }, [design]);
    const computedHeightWidthClasses = useMemo(() => {
        const sizeClass = getHeightWidthClasses(design);
        return [sizeClass].join(' ');
    }, [design]);
    return (
        <>
            <div className='relative flex items-center'>
                <input type={type} id={idForName} value={value} name={idForName} className={`${positionCommonClass} ${computedHeightWidthClasses} z-10 opacity-0 peer`} />
                <label htmlFor={idForName} className={`${computedLabelClasses} cursor-pointer `}>{label}</label>
                <img src={unCheckedImage}
                    className={`${computedHeightWidthClasses} ${positionCommonClass} visible peer-checked:invisible`} />
                <img src={checkedImage}
                    className={`${computedHeightWidthClasses} ${positionCommonClass} invisible peer-checked:visible`} />
            </div>
        </>
    );
};