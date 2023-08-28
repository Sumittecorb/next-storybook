import React, { useMemo, useState } from 'react';
import ReactModal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        padding: '0px',
        overflow: 'inherit',
    },
};

interface ModalProps {
    design?: 'simple' | 'medium' | 'upper'
}

// const getHeadingClass = (design: string) => {
//     switch (design) {
//         case 'simple': {
//             return 'bg-white-100 border-b-2 border-gray-200 text-gray-700';
//         }
//         case 'medium': {
//             return 'bg-black text-gray-200';
//         }
//         default: {
//             return 'bg-sky-700 border border-sky-700 text-gray-200';
//         }
//     }
// };

export const Modal = ({ design = 'simple', ...props }: ModalProps) => {
    const [isOpen, setIsOpen] = useState(false);
    // const computedHeadingClasses = useMemo(() => {
    //     const headingClass = getHeadingClass(design);
    //     return [headingClass].join(' ');
    // }, [design]);

    return (
        <>
            <button className='bg-black text-white w-32 py-3 rounded-xl' onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
            <ReactModal
                isOpen={isOpen}
                style={customStyles}
            >
                <div className='bg-white text-black w-500 xxs:w-full relative'>
                    <div className='bg-modalHeader py-5 px-10'>
                        <button onClick={() => setIsOpen(!isOpen)} className='absolute right-2 top-2'>
                            <img src='./icons/crosswhite.svg'
                                className="w-5 h-5"
                            />
                        </button>
                        <div className='flex items-center justify-center rounded-full'>
                            <img src="./icons/greentick.svg"
                                className='w-28 h-28 rounded-full border border-white'
                            />
                        </div>
                    </div>
                    <div className='text-center py-5 px-10'>
                        <h2 className='text-4xl text-gray-500 font-normal mt-3'>Great!</h2>
                        <p className='mt-3 text-gray-500 font-normal'>Your account has been created successfully.</p>
                        <div className='flex items-center justify-center mt-7 mb-5'>
                            <button className='bg-[#eeb711] text-white font-medium p-2 px-5 rounded-full w-fit text-left flex items-center'>
                                Start Exploring
                                <img src="./icons/leftarrowwhite.svg"
                                    className='w-5 h-5 ml-2 rotate-180' />
                            </button>
                        </div>
                    </div>
                </div>
            </ReactModal>
        </>
    );
};