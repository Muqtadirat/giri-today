import { PrimaryButton } from '@/app/components';
import { useCartSlice } from '@/redux';
import { formatPrice } from '@/utils';

const DeliveryInformation = () => {
  const { totalPrice } = useCartSlice();

  const serviceCharge = 4.99;
  const deliveryFee = 2.5;
  const finalTotal = totalPrice + serviceCharge + deliveryFee;

  const handleCheckoutClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <div>
        <p className="font-raleway text-lg font-semibold">
          Delivery Information
        </p>
        <p className="text-text-secondary text-sm font-medium">
          Choose a delivery option
        </p>
      </div>

      <div className="mt-4 p-5 border border-border-subdued flex flex-col gap-6 lg:gap-10">
        <div>
          <p className="text-base font-semibold">Delivery Address:</p>
          <p className="text-sm text-text-secondary">
            123 Main Street, Suite 100
            <br />
            Springfield, IL 62701
            <br />
            United States
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-base font-semibold">Order Summary</p>
          <div className="flex justify-between text-sm text-text-secondary">
            <span>Subtotal:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-text-secondary">
            <span>Service Charge:</span>
            <span>${serviceCharge.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-text-secondary">
            <span>Delivery Fee:</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="border-t border-border-subdued pt-4 mt-2 flex justify-between font-raleway font-medium">
            <span>Total:</span>
            <span>${formatPrice(finalTotal.toFixed(2))}</span>
          </div>
        </div>

        <PrimaryButton
          type="button"
          onClick={handleCheckoutClick}
          ariaLabel="Proceed to checkout button"
        >
          Proceed to Checkout
        </PrimaryButton>
      </div>
    </div>
  );
};

export default DeliveryInformation;
