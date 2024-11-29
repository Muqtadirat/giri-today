import { dispatch, useProductSlice } from '@/redux';
import { PrimaryButton } from './Buttons';

const NoProduct = () => {
  const { setSelectedCategory, setSelectedSubCategory } = useProductSlice();
  
  return (
    <div className="text-center col-span-4 py-6 space-y-4">
      <p className="text-lg font-medium text-text-secondary">
        We couldn't find any products matching your criteria.
      </p>
      <p className="text-sm text-text-subdued">
        Try adjusting your filters or explore our full collection to find the
        perfect product.
      </p>
      <PrimaryButton
        type="button"
        onClick={() => {
          dispatch(setSelectedCategory(null));
          dispatch(setSelectedSubCategory(null));
        }}
        ariaLabel="Reset Filters"
      >
        Explore All Products
      </PrimaryButton>
    </div>
  );
};

export default NoProduct;
