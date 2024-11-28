import React from 'react';

interface SecondaryButtonProps {
  ariaLabel: string;
  onClick?: () => void;
  type: 'submit' | 'button';
  children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({
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
      className="w-fit transition-all ease-in-out duration-300 border border-border-default hover:border-border-hovered px-6 py-3 text-white hover:text-text-hovered text-sm font-semibold rounded-lg bg-transparent"
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
