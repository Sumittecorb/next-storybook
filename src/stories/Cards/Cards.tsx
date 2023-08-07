import React, { useMemo } from 'react';

interface CardsProps {
  primary?: boolean;
  backgroundColor?: string;
  size?: 'small' | 'medium' | 'large';
  paragraph: string;
  heading: string;
}

const getSizeClasses = (size: string) => {
  switch (size) {
    case 'small': {
      return 'px-4 py-2.5';
    }
    case 'large': {
      return 'px-5 py-3.5';
    }
    default: {
      return 'px-6 py-3';
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? 'text-white bg-green-600'
    : 'text-white bg-gray-600 ';

const BASE_CARDS_CLASSES =
  'max-w-sm rounded-xl';

export const Cards = ({ primary = false, size = 'medium', paragraph, heading, ...props }: CardsProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(' ');
  }, [primary, size]);

  return (
    <>
      <div className={`${BASE_CARDS_CLASSES} ${computedClasses}`} {...props}>
        <div className="p-3">
          <h1 className='text-xl'>{heading}</h1>
          <p className='mt-5'>{paragraph}</p>
        </div>
      </div>
    </>
  );
};