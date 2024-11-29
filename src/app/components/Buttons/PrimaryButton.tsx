import React from 'react';
import Spinner from '../Spinner';

interface PrimaryButtonProps {
  ariaLabel: string;
  onClick?: () => void;
  type: 'submit' | 'button';
  isSubmitting?: boolean;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  type,
  onClick,
  children,
  ariaLabel,
  isSubmitting = false,
}) => {
  return (
    <button
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      className="w-fit transition-all ease-in-out duration-300 border border-black hover:border-border-hovered px-6 py-3 text-white hover:text-text-hovered text-sm font-semibold rounded-lg bg-black"
      disabled={isSubmitting}
    >
      {isSubmitting ? <Spinner size="sm" /> : children}
    </button>
  );
};

export default PrimaryButton;
