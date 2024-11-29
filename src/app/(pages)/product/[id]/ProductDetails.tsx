'use client';

import { Details, DetailsSkeleton } from '@/app/components';
import { arrowLeft } from '@/assets/assets';
import { dispatch, useProductSlice } from '@/redux';
import {
  getProductHandler,
  getProductsHandler,
} from '@/services/productService';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const ProductDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const router = useRouter();

  const { setProducts, allProducts } = useProductSlice();

  const { isSuccess, data, isLoading } = useQuery({
    queryFn: () => getProductHandler(id),
    queryKey: ['all-products', id],
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isSuccess) {
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
      ) : (
        allProducts.map((product) => (
          <Details key={product.id} productDetails={product} />
        ))
      )}
    </div>
  );
};

export default ProductDetails;
