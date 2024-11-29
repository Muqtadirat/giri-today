'use client';

import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { CartIcon } from '@/assets/assets';
import { dispatch, useCartSlice } from '@/redux';


interface CartButtonProps {
  product: { id: string; name: string; price: number; image: string };
}

const CartButton: React.FC<CartButtonProps> = ({ product }) => {
  const { addToCart } = useCartSlice();
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const handleAddToCart = () => {
    setIsOverlayVisible(true);
    dispatch(addToCart({ ...product, quantity: 1 }));

    setTimeout(() => setIsOverlayVisible(false), 1000); 
  };

  return (
    <div className="relative">
      <motion.button
        type="button"
        aria-label="Add to cart"
        onClick={handleAddToCart}
        className="relative w-fit h-10 px-3 border rounded-lg bg-background-subdued hover:scale-105 transition-transform ease-in-out duration-300"
      >
        <CartIcon fill="#000" />
      </motion.button>

      {isOverlayVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.8, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="absolute inset-0 bg-primary rounded-lg flex items-center justify-center pointer-events-none"
        >
          <p className="text-black font-bold text-sm">Added!</p>
        </motion.div>
      )}
    </div>
  );
};

export default CartButton;
