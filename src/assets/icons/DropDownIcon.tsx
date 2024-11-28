import React from 'react';

interface IconProps {
  stroke: string;
  className?: string;
}

const DropDownIcon: React.FC<IconProps> = ({ stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M7 9L12 14L17 9"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DropDownIcon;
