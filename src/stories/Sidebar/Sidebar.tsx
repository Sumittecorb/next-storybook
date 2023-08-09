import React, { useMemo, useState } from 'react';
import { Button } from '../Button/Button';

interface SidebarProps {
    halfClose?: boolean;
    menuList?: any;
}
const mainContainer = 'flex h-screen pb-10';
const leftContainer = 'bg-red-400 text-white h-screen w-72 xxs:w-60 ease-in-out duration-300 whitespace-nowrap';
const rightContainer = 'bg-emerald-400 text-white h-screen w-[calc(100%-288px)] xxs:w-[calc(100%-240px)] ease-in-out duration-300';

const getLeftSideClass = (ishalfClose: boolean) =>
    ishalfClose
        ? 'bg-red-400 text-white h-screen w-20 ease-in-out duration-300 whitespace-nowrap'
        : 'bg-red-400 text-white h-screen w-0 ease-in-out duration-300 whitespace-nowrap';
const geRightSideClass = (ishalfClose: boolean) =>
    ishalfClose
        ? 'bg-emerald-400 text-white h-screen w-[calc(100%-80px)] ease-in-out duration-300'
        : 'bg-emerald-400 text-white h-screen w-full ease-in-out duration-300';


export const Sidebar = ({ halfClose = false, menuList, ...props }: SidebarProps) => {
    const [isMenu, setIsMenu] = useState(true)
    const leftComputedClasses = useMemo(() => {
        const halfCloseClass = getLeftSideClass(halfClose);
        return [halfCloseClass].join(' ');
    }, [halfClose]);
    const rightComputedClasses = useMemo(() => {
        const fullCloseClass = geRightSideClass(halfClose);
        return [fullCloseClass].join(' ');
    }, [halfClose]);
    return (
        <>
            <div className={mainContainer}>
                <div className={isMenu ? leftContainer : leftComputedClasses}>
                    <ul className={isMenu ? "space-y-5 space-x-5 ease-in-out duration-300" : "space-y-5 space-x-5 ease-in-out duration-300"}>
                        <li></li>
                        <li>
                            <a href="#" className='flex items-center'>
                                <img src="https://media.licdn.com/dms/image/C4E0BAQFTCGcHM93-gA/company-logo_200_200/0/1519895568132?e=2147483647&v=beta&t=PazIq2l_YovCQDS1N2bSmLo6IkCVLCbOtCVAAGyRWPc" className='h-10 w-10 rounded-full mr-4' />
                                <span className={isMenu ? "font-medium text-xl" : "hidden"}>TECORB</span>
                            </a>
                        </li>
                    </ul>
                    <ul className={isMenu ? "space-y-5 space-x-5 font-medium text-xl ease-in-out duration-300" : "space-y-5 space-x-5 font-medium text-xl ease-in-out duration-300"}>
                        <li></li>
                        {
                            menuList.map((data: any) => {
                                return (
                                    <li>
                                        <a href="#" className='flex items-center'>
                                            <img src=".." className='w-7 h-7' />
                                            <span className={isMenu ? "ease-in-out duration-300 ml-4 w-[calc(100%-44px)]" : "hidden ease-in-out duration-300"}>{data}</span>
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className={isMenu ? rightContainer : rightComputedClasses}>
                    <div className='flex items-center justify-between pr-5'>
                        <img onClick={() => setIsMenu(!isMenu)} src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg" className='w-16 h-16 cursor-pointer' />
                        <div>
                            <Button label='Login' />
                        </div>
                    </div>
                    <hr />
                </div>
            </div>
        </>
    );
};