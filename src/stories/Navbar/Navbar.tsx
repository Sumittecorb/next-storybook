import React, { useMemo, useState } from 'react';
import { Button } from '../Button/Button';

interface NavbarProps {
    leftOpen?: boolean;
    topLeftOpen?: boolean;
    backgroundColor?: string;
    menuList: any;
    onClick?: () => void;
}

// const menuList = ["Home", "About", "Services", "Portfolio", "Contact"]


const getLeftOpenClass = (isleftOpen: boolean) =>
    isleftOpen
        ? 'flex items-center ipad:pb-10 ipad:h-screen ipad:space-y-5 ipad:absolute ipad:left-[-100%] ipad:w-48 ipad:top-0 ipad:inline-block ipad:bg-black ease-in-out duration-300'
        : '';
const gettopLeftOpenClasses = (istopLeftOpen: boolean) =>
    istopLeftOpen
        ? 'flex items-center ipad:h-screen ipad:space-y-5 ipad:absolute ipad:left-0 ipad:w-48 ipad:top-[-200%] ipad:inline-block ipad:bg-sky-400 ease-in-out duration-300'
        : '';
const BASE_HEADER_CLASSES =
    'w-full text-white bg-sky-400 px-10 ipad:px-5 h-20 text-white flex items-center justify-between';

export const Navbar = ({ leftOpen = false, topLeftOpen = false, menuList, ...props }: NavbarProps) => {
    const [isMenu, setIsMenu] = useState(true)
    const computedClasses = useMemo(() => {
        const leftOpenClass = getLeftOpenClass(leftOpen);
        const topLeftOpenClass = gettopLeftOpenClasses(topLeftOpen);
        return [leftOpenClass, topLeftOpenClass].join(' ');
    }, [leftOpen, topLeftOpen]);

    return (
        <header className={`${BASE_HEADER_CLASSES}`}  {...props}>
            <div>
                <img src="https://media.licdn.com/dms/image/C4E0BAQFTCGcHM93-gA/company-logo_200_200/0/1519895568132?e=2147483647&v=beta&t=PazIq2l_YovCQDS1N2bSmLo6IkCVLCbOtCVAAGyRWPc" className='h-10 w-10 rounded-full' />
            </div>
            <div className='hidden ipad:block'>
                <img onClick={() => setIsMenu(!isMenu)} src="https://icon-library.com/images/white-menu-icon/white-menu-icon-12.jpg" alt='Menu' className='h-16 w-16' />
            </div>
            <ul className={isMenu ? computedClasses : "flex items-center ipad:space-y-5 ipad:px-10 ipad:absolute ipad:left-0 ipad:w-48 ipad:top-0 ipad:inline-block ipad:bg-sky-400 ease-in-out duration-300 ipad:pb-10 ipad:h-screen"}>
                <li className="mr-6 ipad:mt-5 hidden ipad:block">
                    <img src="https://media.licdn.com/dms/image/C4E0BAQFTCGcHM93-gA/company-logo_200_200/0/1519895568132?e=2147483647&v=beta&t=PazIq2l_YovCQDS1N2bSmLo6IkCVLCbOtCVAAGyRWPc" className='h-10 w-10 rounded-full' />
                </li>
                {
                    menuList.map((data: any) => {
                        return (
                            <li className="mr-6">
                                <a href="#">{data}</a>
                            </li>
                        )
                    })
                }
                <li className="mr-6">
                    <Button label='LogIn' />
                </li>
            </ul>
        </header>
    );
};