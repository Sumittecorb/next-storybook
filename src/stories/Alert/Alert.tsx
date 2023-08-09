import React, { useMemo, useState } from 'react';

interface AlertProps {
    Traditional?: boolean;
    user?: any;
    error?: any;
}

const getModeClass = (isTraditional: boolean) =>
    isTraditional
        ? 'flex items-center justify-between bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative'
        : 'flex items-center justify-between bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4';

export const Alert = ({ Traditional = false, user, error, ...props }: AlertProps) => {
    const [isClose, setIsClose] = useState(true)
    const computedClasses = useMemo(() => {
        const TraditionalClass = getModeClass(Traditional);
        return [TraditionalClass].join(' ');
    }, [Traditional]);
    return (
        <>
            <div className={isClose ? computedClasses : "hidden"} role="alert">
                <div>
                    <p className="font-bold mr-3">{user},</p>
                    <p>{error}</p>
                </div>
                <span onClick={() => setIsClose(!isClose)}>
                    <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                </span>
            </div>
        </>
    );
};


