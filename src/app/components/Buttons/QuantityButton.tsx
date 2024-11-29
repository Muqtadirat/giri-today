'use client';

import { dispatch } from '@/redux/store';

import Image from 'next/image';

import { minusIcon, plusIcon } from '@/assets/assets';
import { useCartSlice } from '@/redux';

interface QuantityButtonProps {
  id: string;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ id }) => {
  const { items, updateQuantity, removeFromCart } = useCartSlice();

  const item = items.find((item) => item.id === id);
  const quantity = item ? item.quantity : 0;
  const handleIncrease = () => {
    if (item) {
      const newQuantity = quantity + 1;
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleDecrease = () => {
    if (item) {
      const newQuantity = quantity - 1;
      if (newQuantity < 1) {
        dispatch(removeFromCart(id));
      } else {
        dispatch(updateQuantity({ id, quantity: newQuantity }));
      }
    }
  };

  return (
    <div className="w-fit h-fit flex items-center gap-4 px-4 py-2 rounded-lg border border-black">
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
