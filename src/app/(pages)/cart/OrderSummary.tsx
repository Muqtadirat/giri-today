import { CartItem, PrimaryButton } from '@/app/components';
import { bulb } from '@/assets/assets';
import { useCartSlice } from '@/redux';
import { formatPrice } from '@/utils';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const OrderSummary = () => {
  const { items, totalPrice } = useCartSlice();
  const router = useRouter();

  return (
    <div>
      <div>
        <p className="font-raleway text-lg font-semibold">Order Summary</p>
        <p className="text-text-secondary text-sm font-medium">
          Items in your cart
        </p>
      </div>
      <div className="mt-4 p-5 border border-border-subdued flex flex-col gap-6 lg:gap-10">
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            <Image src={bulb} alt="Lightbulb icon" className="w-16 h-16" />
            <p className="text-lg font-medium text-text-secondary">
              Your cart is empty
            </p>
            <p className="text-sm text-text-secondary">
              Looks like you haven’t added anything to your cart yet.
            </p>
            <PrimaryButton
              type="button"
              onClick={() => router.push('/')}
              ariaLabel="Continue shopping button"
            >
              Continue shopping
            </PrimaryButton>
          </div>
        ) : (
          <>
            {items.map((item) => (
              <CartItem key={item.id} cartDetails={item} />
            ))}
            <div className="mt-4 border-t border-border-subdued pt-4">
              <div className="flex justify-between font-raleway">
                <span>Total Price:</span>
                <span>${formatPrice(totalPrice.toFixed(2))}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default OrderSummary;
