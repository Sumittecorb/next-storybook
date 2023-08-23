import React, { useMemo } from 'react';

interface FooterProps {
    background?: 'bgBlack' | 'bgGray' | 'bgWhite';
    listHeadingColor?: 'textBlack' | 'textGray' | 'textWhite';
    listColor?: 'textBlack' | 'textGray' | 'textWhite';
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

const listHeading = "mb-18 font-bold select-none";
const ulClass = "flex flex-col gap-10";

const getBackgroundClass = (background: string) => {
    switch (background) {
        case 'bgBlack': {
            return 'bg-black';
        }
        case 'bgWhite': {
            return 'bg-white';
        }
        default: {
            return 'bg-gray-800';
        }
    }
};
const getListHeadingClass = (listHeadingColor: string) => {
    switch (listHeadingColor) {
        case 'textBlack': {
            return 'text-gray-400';
        }
        case 'textWhite': {
            return 'text-gray-600';
        }
        default: {
            return 'text-gray-400';
        }
    }
};
const getlistingClass = (listHeadingColor: string) => {
    switch (listHeadingColor) {
        case 'textBlack': {
            return 'text-black';
        }
        case 'textWhite': {
            return 'text-black';
        }
        default: {
            return 'text-gray-200';
        }
    }
};
export const Footer = ({ background = 'bgGray', listHeadingColor = "textWhite", listColor = "textWhite", ...props }: FooterProps) => {
    const computedBackgroundClasses = useMemo(() => {
        const backgroundClass = getBackgroundClass(background);
        return [backgroundClass].join(' ');
    }, [background]);
    const computedlistHeadingClasses = useMemo(() => {
        const listHeadingClass = getListHeadingClass(listHeadingColor);
        return [listHeadingClass].join(' ');
    }, [listHeadingColor]);
    const computedListingClasses = useMemo(() => {
        const listColorClass = getlistingClass(listColor);
        return [listColorClass].join(' ');
    }, [listColor]);
    return (
        <>
            <div className="flex flex-col mx-auto max-w-full h-auto">
                <div className={`${computedBackgroundClasses} flex lg:items-center lg:justify-between flex-col lg:flex-row gap-y-12 py-7 lg:py-0 px-4 sm:px-7 md:px-10 lg:px-12 xl:px-20 w-full h-auto lg:h-380`}>
                    <div className="lg:w-4/12  text-sm xl:text-base">
                        <div className={`${computedListingClasses} text-center mb-30`}>
                            Lorem ipsum dolor sit
                        </div>
                        <div className={`${computedListingClasses} text-center`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ipsum doloremque praesentium repudiandae similique quas ipsa!
                        </div>
                    </div>
                    <div className="flex justify-center sm:justify-between flex-wrap lg:flex-nowrap gap-y-16 gap-x-24 sm:gap-x-0 lg:w-7/12">
                        {
                            navigation.map((navData) => {
                                return (
                                    <>
                                        <div className="text-center sm:text-left text-sm xl:text-base">
                                            <div className={`${listHeading} ${computedlistHeadingClasses}`}>{navData.heading}</div>
                                            <ul className={`${ulClass} ${computedListingClasses}`}>
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