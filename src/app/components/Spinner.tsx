import React from 'react';

import { clsx } from 'clsx';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'sm' }) => {
  const sizeClasses = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-[50px] h-[50px]',
  };

  return (
    <div className="flex justify-center items-center relative">
      <div
        className={clsx(
          'duration-500 rounded-full animate-spin border-white border-t-transparent',
          'border-2 border-right',
          sizeClasses[size],
        )}
      ></div>
    </div>
  );
};

export default Spinner;
