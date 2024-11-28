import React from 'react';

interface PrimaryButtonProps {
  ariaLabel: string;
  onClick?: () => void;
  type: 'submit' | 'button';
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type,
  onClick,
  children,
  ariaLabel,
}) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className="w-fit transition-all ease-in-out duration-300 border border-black hover:border-border-hovered px-6 py-3 text-white hover:text-text-hovered text-sm font-semibold rounded-lg bg-black"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
