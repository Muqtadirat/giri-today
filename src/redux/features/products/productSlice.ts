import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { BrandName } from '@/utils';

export interface CardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  brandLogo: BrandName;
}

export interface DetailsProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  description: string;
  brandLogo: BrandName;
}

export interface CategoryProps {
  title: string;
  alt: string;
  subcategories: string[];
}

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  rating: number;
  category: string;
  subcategory: string;
  description: string;
  brandLogo: BrandName;
  tags: string[];
}

export interface ProductState {
  allProducts: ProductProps[];
  categories: CategoryProps[];
  selectedBrand: string | null;
  selectedCategory: string | null;
  selectedSubCategory: string | null;
}

const initialState: ProductState = {
  allProducts: [],
  categories: [],
  selectedBrand: '',
  selectedCategory: '',
  selectedSubCategory: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<ProductProps[]>) {
      state.allProducts = action.payload;
    },
    setSelectedCategory(state, action: PayloadAction<string | null>) {
      state.selectedCategory = action.payload;
    },
    setSelectedSubCategory(state, action: PayloadAction<string | null>) {
      state.selectedSubCategory = action.payload;
    },
    setSelectedBrand(state, action: PayloadAction<string | null>) {
      state.selectedBrand = action.payload;
    },
  },
});

export function useProductSlice() {
  const state = useSelector(({ product }: RootState) => product);

  return { ...state, ...productSlice.actions };
}

export default productSlice.reducer;
