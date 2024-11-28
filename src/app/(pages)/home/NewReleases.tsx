'use client';

import { useQuery } from '@tanstack/react-query';
import { getProductsHandler } from '@/services/productService';
import { useEffect } from 'react';
import { dispatch, useProductSlice } from '@/redux';
import { Card, CardSkeleton } from '@/app/components';

const NewReleases = () => {
  const { setProducts, allProducts } = useProductSlice();

  const { isSuccess, data, isLoading } = useQuery({
    queryFn: () => getProductsHandler(),
    queryKey: ['all-products'],
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isSuccess) {
      dispatch(setProducts(data));
    }
  }, [dispatch, isSuccess, data]);
  return (
    <div className="grid lg:grid-cols-4 gap-6">
      {isLoading ? (
        <>
          {[...Array(4)].map((_, index) => (
            <CardSkeleton itemKey={index} key={index} />
          ))}
        </>
      ) : allProducts.length === 0 ? (
        <p className="text-center py-6">No product listed</p>
      ) : (
        allProducts.map((product) => (
          <Card key={product.id} cardDetails={product} />
        ))
      )}
    </div>
  );
};

export default NewReleases;
