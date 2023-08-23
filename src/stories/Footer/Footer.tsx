import React, { useMemo } from 'react';

interface FooterProps {
    size?: 'small' | 'medium' | 'large';
    label?: string;
    imgSrc?: string;
}
const socialIcons = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png",
    "https://static-00.iconduck.com/assets.00/instagram-icon-2048x2048-uc6feurl.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png",
    "https://png.pngtree.com/png-clipart/20221019/original/pngtree-twitter-social-media-round-icon-png-image_8704823.png"
];
const navigation = [
    { heading: "Product", listing: ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"] },
    { heading: "Company", listing: ["About us", "Careers", "Press", "News", "Media kit", "Contact"] },
    { heading: "Resource", listing: ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"] },
    { heading: "Social", listing: ["Twitter", "LinkedIn", "Facebook", "Github", "AngelList", "Dribbble"] },
    { heading: "Legal", listing: ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"] },
]
const productList = ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"];
const companyList = ["About us", "Careers", "Press", "News", "Media kit", "Contact"];
const resourceList = ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"];
const socialList = ["Twitter", "LinkedIn", "Facebook", "Github", "AngelList", "Dribbble"];
const legalList = ["Terms", "Privacy", "Cookies", "Licenses", "Settings", "Contact"];
const listHeading = "mb-18 text-gray-400 font-bold select-none";
const ulClass = "flex flex-col gap-10 text-gray-200";

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
export const Footer = ({ size = 'medium', label, imgSrc, ...props }: FooterProps) => {
    // const computedFileInputClasses = useMemo(() => {
    //     const sizeClass = getFileInputClasses(size);
    //     return [sizeClass].join(' ');
    // }, [size]);
    // const computedLabelClasses = useMemo(() => {
    //     const sizeClass = getLabelClasses(size);
    //     return [sizeClass].join(' ');
    // }, [size]);
    // const computedMainContainerClasses = useMemo(() => {
    //     const sizeClass = getMainContainerClasses(size);
    //     return [sizeClass].join(' ');
    // }, [size]);
    return (
        <>
            {/* <div className='mt-5'>
                <label className={`${computedLabelClasses} block mb-2`} htmlFor='username' >{label}</label>
                <div className={`relative ${computedMainContainerClasses} overflow-hidden ${computedFileInputClasses}`}>
                    <input type="file" className={`${computedMainContainerClasses} p-24 absolute top-0 left-0 cursor-pointer`} />
                    <div className={`${computedMainContainerClasses}`}>
                        <img src={imgSrc} className='w-full h-full' />
                    </div>
                </div>
            </div> */}
            <div className="flex flex-col mx-auto max-w-full h-auto">
                <div className="flex lg:items-center lg:justify-between flex-col lg:flex-row gap-y-12 py-7 lg:py-0 px-4 sm:px-7 md:px-10 lg:px-12 xl:px-20 w-full h-auto lg:h-380 bg-gray-800">
                    <div className="lg:w-4/12  text-sm xl:text-base">
                        <div className="text-center mb-30 text-white">
                            Lorem ipsum dolor sit
                        </div>
                        <div className="text-center text-gray-200">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum doloremque praesentium repudiandae similique quas ipsa!
                        </div>
                    </div>
                    <div className="flex justify-center sm:justify-between flex-wrap lg:flex-nowrap gap-y-16 gap-x-24 sm:gap-x-0 lg:w-7/12">
                        {
                            navigation.map((navData) => {
                                return (
                                    <>
                                        <div className="text-center sm:text-left text-sm xl:text-base">
                                            <div className={listHeading}>{navData.heading}</div>
                                            <ul className={ulClass}>
                                                {
                                                    navData.listing.map((listData: any) => {
                                                        return (
                                                            <>
                                                                <a className="hover:underline" href="#">
                                                                    <li>{listData}</li>
                                                                </a>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="flex items-center justify-evenly sm:justify-between flex-col sm:flex-row sm:px-7 md:px-10 lg:px-12 xl:px-20 w-full h-24 bg-gray-900">
                    <div className="text-gray-400 text-sm xl:text-base">Lorem ipsum dolor sit</div>
                    <ul className="flex gap-5">
                        {
                            socialIcons.map((icons) => {
                                return (
                                    <>
                                        <li className='cursor-pointer'><img src={icons} className='w-10 h-10' /></li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </>
    );
};