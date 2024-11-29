'use client';

import { useQuery } from '@tanstack/react-query';
import { getProductsHandler } from '@/services/productService';
import { useEffect, useState } from 'react';
import { dispatch, useProductSlice } from '@/redux';
import { Card, CardSkeleton, NoProduct, PrimaryButton } from '@/app/components';
import { getFilteredProducts } from '@/utils';

const PopularItems = () => {
   const [displayedProductsCount, setDisplayedProductsCount] = useState(8);
  const { setProducts, allProducts, selectedCategory, selectedSubCategory } =
    useProductSlice();

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

  const filteredProducts = getFilteredProducts(
    allProducts,
    selectedCategory,
    selectedSubCategory,
    'popular',
  );

  const loadMoreProducts = () => {
    setDisplayedProductsCount((prevCount) => prevCount + 4);
  };

  return (
    <div className="mt-8">
      <p className="text-lg lg:text-3xl mb-6 font-raleway font-semibold text-text-default">
        Popular items
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

export default PopularItems;
