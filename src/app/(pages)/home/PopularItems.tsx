'use client';

import { useQuery } from '@tanstack/react-query';
import { getProductsHandler } from '@/services/productService';
import { useEffect } from 'react';
import { dispatch, useProductSlice } from '@/redux';
import { Card, CardSkeleton, NoProduct } from '@/app/components';

const PopularItems = () => {
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

  const filteredProducts = allProducts.filter((product) => {
    const isPopular = product.tags.includes('popular');
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;
    const matchesSubCategory = selectedSubCategory
      ? product.subcategory === selectedSubCategory
      : true;
    return isPopular && matchesCategory && matchesSubCategory;
  });

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
          filteredProducts.map((product) => (
            <Card key={product.id} cardDetails={product} />
          ))
        )}
      </div>
    </div>
  );
};

export default PopularItems;
