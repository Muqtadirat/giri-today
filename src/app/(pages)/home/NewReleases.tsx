'use client';

import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { Card, CardSkeleton, NoProduct, PrimaryButton } from '@/app/components';
import { dispatch, useProductSlice } from '@/redux';
import { getProductsHandler } from '@/services/productService';
import { getFilteredProducts } from '@/utils';

const NewReleases = () => {
  const [displayedProductsCount, setDisplayedProductsCount] = useState(8);
  const { setProducts, allProducts, selectedCategory, selectedSubCategory } =
    useProductSlice();

  const { isSuccess, data, isLoading } = useQuery({
    queryFn: () => getProductsHandler(),
    queryKey: ['all-products'],
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isSuccess && data) {
      dispatch(setProducts(data));
    }
  }, [dispatch, isSuccess, data]);

  const filteredProducts = getFilteredProducts(
    allProducts,
    selectedCategory,
    selectedSubCategory,
    'new',
  );

  const loadMoreProducts = () => {
    setDisplayedProductsCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="mt-8">
      <p className="text-lg lg:text-3xl mb-6 font-raleway font-semibold text-text-default">
        New releases
      </p>
      <div className="grid lg:grid-cols-4 gap-6">
        {isLoading ? (
          <>
            {[...Array(4)].map((_, index) => (
              <CardSkeleton itemKey={index} key={index} />
            ))}
          </>
        ) : filteredProducts.length === 0 ? (
          <NoProduct />
        ) : (
          filteredProducts
            .slice(0, displayedProductsCount)
            .map((product) => <Card key={product.id} cardDetails={product} />)
        )}
      </div>

      {filteredProducts.length > displayedProductsCount && (
        <div className="mt-8">
          <PrimaryButton
            type="submit"
            ariaLabel="Load more products"
            isSubmitting={isLoading}
            onClick={loadMoreProducts}
          >
            Load more
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default NewReleases;
