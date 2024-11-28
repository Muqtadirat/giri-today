'use client';

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import ProductReducer from './features/products/productSlice';

const rootReducer = combineReducers({
  product: ProductReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const dispatch = store.dispatch;