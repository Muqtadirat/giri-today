import React from 'react';

interface IconProps {
  stroke: string;
  className?: string;
}

const DeleteIcon: React.FC<IconProps> = ({ stroke, className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M14.8 8.4V7.92C14.8 7.24794 14.8 6.91191 14.6692 6.65521C14.5542 6.42942 14.3706 6.24584 14.1448 6.13079C13.8881 6 13.5521 6 12.88 6H11.92C11.2479 6 10.9119 6 10.6552 6.13079C10.4294 6.24584 10.2458 6.42942 10.1308 6.65521C10 6.91191 10 7.24794 10 7.92V8.4M11.2 11.7V14.7M13.6 11.7V14.7M7 8.4H17.8M16.6 8.4V15.12C16.6 16.1281 16.6 16.6321 16.4038 17.0172C16.2312 17.3559 15.9559 17.6312 15.6172 17.8038C15.2321 18 14.7281 18 13.72 18H11.08C10.0719 18 9.56786 18 9.18282 17.8038C8.84413 17.6312 8.56876 17.3559 8.39619 17.0172C8.2 16.6321 8.2 16.1281 8.2 15.12V8.4"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DeleteIcon;
