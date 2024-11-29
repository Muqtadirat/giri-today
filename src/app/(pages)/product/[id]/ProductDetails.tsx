'use client';

import { useEffect } from 'react';

import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { Details, DetailsSkeleton, PrimaryButton } from '@/app/components';
import { arrowLeft } from '@/assets/assets';
import { dispatch, useProductSlice } from '@/redux';
import { getProductsHandler } from '@/services/productService';

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const router = useRouter();

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
      ) : !allProducts.length ? (
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
        allProducts.map((product) => (
          <Details key={product.id} productDetails={product} />
        ))
      )}
    </div>
  );
};

export default ProductDetails;
