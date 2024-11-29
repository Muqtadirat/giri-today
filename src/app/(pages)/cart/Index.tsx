'use client';

import OrderSummary from './OrderSummary';
import DeliveryInformation from './DeliveryInfo';

const Cart = () => {
  return (
    <div className="lg:px-4">
      <div>
        <p className="text-lg lg:text-2xl font-raleway">Checkout</p>
        <p className="text-text-secondary text-sm font-medium">
          Confirm your order and make payment
        </p>
      </div>
      <div className="mt-8 lg:mt-10 grid lg:grid-cols-2 gap-6">
        <OrderSummary />
        <DeliveryInformation />
      </div>
    </div>
  );
};

export default Cart;
