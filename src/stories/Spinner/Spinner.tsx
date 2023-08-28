import React, { useMemo, useState } from 'react';

interface SpinnerProps {
    design?: 'simple' | 'medium' | 'upper',
}

const breadcrumbList = ["Home", "Aout", "section"];
const getmainContainerClass = (design: string) => {
    switch (design) {
        case 'simple': {
            return 'bg-green-300';
        }
        case 'medium': {
            return 'bg-sky-700';
        }
        default: {
            return 'bg-red-700';
        }
    }
};
const getactiveListClass = (design: string) => {
    switch (design) {
        case 'simple': {
            return 'text-black';
        }
        case 'medium': {
            return 'text-gray-200';
        }
        default: {
            return 'text-gray-200';
        }
    }
};
const getInactiveClass = (design: string) => {
    switch (design) {
        case 'simple': {
            return 'text-gray-500';
        }
        case 'medium': {
            return 'text-sky-500';
        }
        default: {
            return 'text-gray-400';
        }
    }
};
const getIconClass = (design: string) => {
    switch (design) {
        case 'simple': {
            return './icons/rightarrow.svg';
        }
        case 'medium': {
            return './icons/smallblueleftarrow.svg';
        }
        default: {
            return 'https://static.thenounproject.com/png/2342342-200.png';
        }
    }
};
export const Spinner = ({ design = 'simple', ...props }: SpinnerProps) => {
    const computedMainContainerClass = useMemo(() => {
        const mainCOntainerClass = getmainContainerClass(design);
        return [mainCOntainerClass].join(' ');
    }, [design]);
    const computedActiveClasses = useMemo(() => {
        const activeClass = getactiveListClass(design);
        return [activeClass].join(' ');
    }, [design]);
    const computedInactiveClasses = useMemo(() => {
        const inActiveClass = getInactiveClass(design);
        return [inActiveClass].join(' ');
    }, [design]);
    const computedIconClass = useMemo(() => {
        const inActiveClass = getIconClass(design);
        return [inActiveClass].join('');
    }, [design]);
    return (
        <>
            <p>Spinner</p>
            {/* <nav
                className={`${computedMainContainerClass} w-full px-5 rounded-md`}>
                <ol className="list-reset flex items-center">
                    {
                        breadcrumbList.map((list) => {
                            return (
                                <>
                                    <li>
                                        <a href="#"
                                            className={`${computedActiveClasses} font-medium`}>
                                            {list}
                                        </a>
                                    </li>
                                    <li>
                                        <span className="mx-2"><img src={computedIconClass} className='w-4 h-3 mx-2' /></span>
                                    </li>
                                </>
                            )
                        })
                    }
                    <li className={`${computedInactiveClasses}`}>Data</li>
                </ol>
            </nav> */}
        </>
    );
};