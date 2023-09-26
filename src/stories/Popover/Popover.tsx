import React, { useMemo, useState } from 'react';

interface PopoverProps {
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
export const Popover = ({ design = 'simple', ...props }: PopoverProps) => {
    const [isOver, setIsOver] = useState(false)
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

            <button data-popover-target="popover-user-profile" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">User profile</button>
            <div data-popover id="popover-user-profile" role="tooltip" className="absolute z-10 invisible inline-block w-64 text-sm text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600">
                <div className="p-3">
                    <div className="flex items-center justify-between mb-2">
                        <a href="#">
                            <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos" />
                        </a>
                        <div>
                            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
                        </div>
                    </div>
                    <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
                        <a href="#">Jese Leos</a>
                    </p>
                    <p className="mb-3 text-sm font-normal">
                        <a href="#" className="hover:underline">@jeseleos</a>
                    </p>
                    <p className="mb-4 text-sm">Open-source contributor. Building <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
                    <ul className="flex text-sm">
                        <li className="mr-2">
                            <a href="#" className="hover:underline">
                                <span className="font-semibold text-gray-900 dark:text-white">799</span>
                                <span>Following</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                                <span>Followers</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div data-popper-arrow></div>
            </div>


        </>
    );
};