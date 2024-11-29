import React from 'react';

import { clsx } from 'clsx';

export interface SkeletonProp {
  className?: string;
}

const Skeleton: React.FC<SkeletonProp> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        'bg-[linear-gradient(90deg,_#e4e4e7_25%,_#d6d6da_50%,_#e4e4e7_75%)]',
        'animate-shimmers bg-[length:200%_100%]',
      )}
    ></div>
  );
};

export default Skeleton;
