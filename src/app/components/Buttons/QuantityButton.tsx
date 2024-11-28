'use client';

import { minusIcon, plusIcon } from '@/assets/assets';
import Image from 'next/image';
import { useState } from 'react';

interface QuantityButtonProps {
  initialQuantity?: number;
  onQuantityChange?: (quantity: number) => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  initialQuantity = 1,
  onQuantityChange,
}) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      if (onQuantityChange) onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(1, prevQuantity - 1);
      if (onQuantityChange) onQuantityChange(newQuantity);
      return newQuantity;
    });
  };

  return (
    <div className="w-fit flex items-center gap-4 px-4 py-2 rounded-lg border border-black">
      <button
        onClick={handleDecrease}
        className="w-8 h-8 flex justify-center items-center"
      >
        <Image src={minusIcon} alt="Minus icon" width={20} height={20} />
      </button>
      <span className="text-xl font-semibold w-[20px]">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="w-8 h-8 flex justify-center items-center"
      >
        <Image src={plusIcon} alt="Plus icon" width={20} height={20} />
      </button>
    </div>
  );
};

export default QuantityButton;
