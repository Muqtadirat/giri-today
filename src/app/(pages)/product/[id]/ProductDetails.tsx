'use client';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Details, DetailsSkeleton, PrimaryButton } from '@/app/components';
import { arrowLeft } from '@/assets/assets';
import { dispatch, useProductSlice } from '@/redux';
import { getProductsHandler } from '@/services/productService';

interface ProductDetailsProps {
  params: { name: string };
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductDetails = ({ params }: ProductDetailsProps) => {
  const router = useRouter();
   const query = new URLSearchParams(window.location.search);
   const id = query.get('id');

  const { setProducts, allProducts } = useProductSlice();

  const { isSuccess, data, isLoading } = useQuery({
    queryFn: () => getProductsHandler(),
    queryKey: ['all-products', id],
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setProducts(data));
    }
  }, [dispatch, isSuccess, data]);

  const selectedProduct = allProducts.find((product) => product.id === id);

  return (
    <div className="lg:px-4">
      <Image
        src={arrowLeft}
        alt="Back button"
        onClick={() => router.back()}
        className="hover:cursor-pointer mt-4"
      />
      {isLoading ? (
        <DetailsSkeleton />
      ) : !selectedProduct ? (
        <div className="mt-10 text-center">
          <p className="text-lg font-raleway">Product Not Found</p>
          <p className="text-sm mb-6 mt-2">
            We couldn’t find the product you’re looking for. Please check the ID
            or browse other items.
          </p>
          <PrimaryButton
            type="button"
            onClick={() => router.push('/')}
            ariaLabel="Back to home button"
          >
            Back to Home
          </PrimaryButton>
        </div>
      ) : (
        <Details key={selectedProduct.id} productDetails={selectedProduct} />
      )}
    </div>
  );
};

export default ProductDetails;
