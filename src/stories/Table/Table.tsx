import React, { useMemo, useState } from 'react';

interface TableProps {
    design?: 'simple' | 'medium' | 'upper'
}
const tableData = [
    { key: '1', id: '01', name: 'Aman Kumar', mobile: '9930424430', email: 'aman.22@tecorb.co', address: 'Noida', department: 'IT' },
    { key: '2', id: '02', name: 'Mohit Pathak', mobile: '6543245678', email: 'mohit.22@tecorb.co', address: 'Muzaffarpur, Bihar', department: 'Production' },
    { key: '3', id: '03', name: 'Gaurav Pandey', mobile: '9876543234', email: 'gaurav.22@tecorb.co', address: 'Noida', department: 'Machenical' },
    { key: '4', id: '04', name: 'Pankaj Kumar', mobile: '8765432198', email: 'pankaj.22@tecorb.co', address: 'Muzaffarpur, Bihar', department: 'Electrical' },
    { key: '5', id: '05', name: 'Ashutosh Kumar', mobile: '7654321987', email: 'ashutosh.22@tecorb.co', address: 'Noida', department: 'Electronics' },
    { key: '6', id: '06', name: 'Sumit Sexena', mobile: '6543219876', email: 'sumit.22@tecorb.co', address: 'Muzaffarpur, Bihar', department: 'Management' },
    { key: '7', id: '07', name: 'Abhishek Kumar', mobile: '5432198760', email: 'abhishek.22@tecorb.co', address: 'Noida', department: 'Communication' },
    { key: '8', id: '08', name: 'Rohit Kumar', mobile: '4321098765', email: 'rohit.22@tecorb.co', address: 'Muzaffarpur, Bihar', department: 'Hotel Management' },
]

const getHeadingClass = (design: string) => {
    switch (design) {
        case 'simple': {
            return 'bg-white-100 border-b-2 border-gray-200 text-gray-700';
        }
        case 'medium': {
            return 'bg-black text-gray-200';
        }
        default: {
            return 'bg-sky-700 border border-sky-700 text-gray-200';
        }
    }
};
const getStripedClass = (design: string) => {
    switch (design) {
        case 'simple': {
            return '[&>tbody>*:nth-child(odd)]:bg-white [&>tbody>*:nth-child(even)]:bg-white';
        }
        case 'medium': {
            return '[&>tbody>*:nth-child(odd)]:bg-white [&>tbody>*:nth-child(even)]:bg-gray-50';
        }
        default: {
            return '[&>tbody>*:nth-child(odd)]:bg-white [&>tbody>*:nth-child(even)]:bg-gray-50';
        }
    }
};
const thClass = "px-5 py-3 font-semibold uppercase tracking-wider";
const tdClass = "px-5 py-3 font-normal text-black tracking-winder"

export const Table = ({ design = 'simple', ...props }: TableProps) => {
    const computedHeadingClasses = useMemo(() => {
        const headingClass = getHeadingClass(design);
        return [headingClass].join(' ');
    }, [design]);
    const computedStripedClasses = useMemo(() => {
        const stripedClass = getStripedClass(design);
        return [stripedClass].join(' ');
    }, [design]);
    return (
        <>
            <div className='w-full mb-10 overflow-x-auto pathak'>
                <div className='inline-block min-w-full shadow-md rounded-lg overflow-hidden'>
                    <table className={`min-w-full  leading-normal text-left whitespace-nowrap ${computedStripedClasses}`}>
                        <thead className='text-xs'>
                            <tr className={computedHeadingClasses}>
                                <th className={thClass}>S.No</th>
                                <th className={`${thClass}  whitespace-normal max-w-220`}>Name</th>
                                <th className={thClass}>Mobile Number</th>
                                <th className={thClass}>Email ID</th>
                                <th className={thClass}>Address</th>
                                <th className={thClass}>Department</th>
                            </tr>
                        </thead>
                        <tbody className='text-sm'>
                            {
                                tableData.map((data) => {
                                    return (
                                        <>
                                            <tr className='border-b border-gray-200' key={data.key}>
                                                <td className={tdClass}>{data.id}</td>
                                                <td className={`${tdClass} whitespace-normal max-w-220 line-clamp-2 max-h-16`}>{data.name}</td>
                                                <td className={tdClass}>{data.mobile}</td>
                                                <td className={tdClass}>{data.email}</td>
                                                <td className={tdClass}>{data.address}</td>
                                                <td className={tdClass}>{data.department}</td>
                                            </tr>
                                        </>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};