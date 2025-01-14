'use client';

import Image from 'next/image';

import { PrimaryButton, QuantityButton } from '@/app/components';
import { star } from '@/assets/assets';
import { DetailsProps, dispatch, useCartSlice } from '@/redux';

interface ProductDetailsProps {
  productDetails: DetailsProps;
}

const Details: React.FC<ProductDetailsProps> = ({ productDetails }) => {
  const { id, image, price, name, rating, description } = productDetails;
  const { addToCart } = useCartSlice();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...productDetails, quantity: 1 }));
  };

  return (
    <div className="lg:px-4" id={id}>
      <div className="mt-10 lg:mt-16 grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
        <div>
          <h4 className="text-xl lg:text-3xl font-raleway font-extrabold">
            {name}
          </h4>
          <div className="flex items-center justify-between mt-6 mb-10 font-semibold">
            <p>${price}</p>
            <div className="flex items-center gap-x-1 text-sm">
              <Image src={star} alt="star icon" />
              <p className="font-medium">{rating}</p>
            </div>
          </div>
          <p>{description}</p>
          <div className="flex justify-between items-center mt-8 gap-6">
            <QuantityButton id={id} />
            <PrimaryButton
              type="button"
              ariaLabel="Add to cart"
              onClick={handleAddToCart}
            >
              Add to cart
            </PrimaryButton>
          </div>
        </div>
        <Image
          src={image}
          alt={`${name} product image`}
          width={500}
          height={100}
          className="h-[250px] w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Details;
