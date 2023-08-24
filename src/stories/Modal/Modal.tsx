import React, { useMemo, useState } from 'react';

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
    const [isOpen, setIsOpen] = useState(false)
    // const computedHeadingClasses = useMemo(() => {
    //     const headingClass = getHeadingClass(design);
    //     return [headingClass].join(' ');
    // }, [design]);
    return (
        <>
            <button className='bg-black text-white w-32 py-3 rounded-xl' onClick={() => setIsOpen(!isOpen)}>Open Modal</button>
            {
                isOpen &&
                <div className="relative z-10 h-screen" >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <div className="p-5 rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="mb-3">
                                    <h3 className="text-base font-semibold leading-6 text-gray-900">Deactivate account</h3>
                                    <p className="text-sm text-gray-500 mt-2">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                                </div>
                                <div className='flex items-center justify-end'>
                                    <button type="button" className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white mr-3">Deactivate</button>
                                    <button type="button" className="rounded-md bg-gray-300 px-3 py-2 text-sm font-semibold text-gray-900" onClick={() => setIsOpen(!isOpen)}>Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};