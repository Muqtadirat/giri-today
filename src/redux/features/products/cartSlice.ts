import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

export interface CartProps {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartProps[];
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartProps>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    removeFromCart(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
      );
    },
    clearCart(state) {
      state.items = [];
      state.totalPrice = 0;
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        if (item.quantity < 1) {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id,
          );
        }
        state.totalPrice = state.items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      }
    },
  },
});

export function useCartSlice() {
  const state = useSelector(({ cart }: RootState) => cart);

  return { ...state, ...cartSlice.actions };
}
export default cartSlice.reducer;
