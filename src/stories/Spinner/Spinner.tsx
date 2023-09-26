import React, { useMemo, useState } from 'react';

interface SpinnerProps {
    design?: 'regular' | 'dashed' | 'shadow',
}

const getDesignClass = (design: string) => {
    switch (design) {
        case 'regular': {
            return 'border-4 border-solid border-green-500';
        }
        case 'dashed': {
            return 'border-8 border-dashed border-purple-500';
        }
        default: {
            return 'border-4 border-solid border-sky-400 shadow-md';
        }
    }
};
export const Spinner = ({ design = 'regular', ...props }: SpinnerProps) => {
    const computedDesignClass = useMemo(() => {
        const designClass = getDesignClass(design);
        return [designClass].join(' ');
    }, [design]);
    return (
        <>
            <div className={`${computedDesignClass} w-12 h-12 rounded-full animate-spin border-t-transparent`}></div>
        </>
    );
};