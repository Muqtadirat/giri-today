import React from 'react';

interface PillButtonProps {
  ariaLabel: string;
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const PillButton: React.FC<PillButtonProps> = ({
  onClick,
  children,
  ariaLabel,
  selected = false,
}) => {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      className={`text-sm font-medium rounded-xl border-2 px-3 py-1.5 transition-all duration-300 ease-in-out ${
        selected
          ? 'bg-black text-white border-black'
          : 'text-text-subdued bg-surface-subdued border-border-subdued hover:border-black hover:bg-surface-hovered hover:text-text-primary'
      }`}
    >
      {children}
    </button>
  );
};

export default PillButton;
