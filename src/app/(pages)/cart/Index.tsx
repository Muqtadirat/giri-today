'use client';

import OrderSummary from './OrderSummary';
import DeliveryInformation from './DeliveryInfo';
import Image from 'next/image';
import { arrowLeft } from '@/assets/assets';
import { useRouter } from 'next/navigation';

const Cart = () => {
  const router = useRouter();

  return (
    <div className="lg:px-4">
      <Image
        src={arrowLeft}
        alt="Back button"
        onClick={() => router.back()}
        className="hover:cursor-pointer my-4"
      />
      <div>
        <p className="text-lg lg:text-2xl font-raleway">Checkout</p>
        <p className="text-text-secondary text-sm font-medium">
          Confirm your order and make payment
        </p>
      </div>
      <div className="mt-6 lg:mt-8 grid lg:grid-cols-2 gap-6">
        <OrderSummary />
        <DeliveryInformation />
      </div>
    </div>
  );
};

export default Cart;
