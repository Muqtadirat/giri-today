import { CartProps } from '@/redux';
import Image from 'next/image';
import { QuantityButton } from '../Buttons';

interface CartItemProps {
  cartDetails: CartProps;
}

const CartItem: React.FC<CartItemProps> = ({ cartDetails }) => {
  const { id, image, name, price, quantity } = cartDetails;

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <Image
          src={image}
          alt={`${name} image`}
          width={100}
          height={100}
          className="lg:w-[176px] lg:h-[80px] object-contain"
        />
        <div className="flex gap-2 flex-col">
          <p className="text-lg">{name}</p>
          <p>₦{price}</p>
          <p className="text-sm">Quantity: {quantity}</p>
        </div>
        <div>
          <QuantityButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
