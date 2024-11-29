import { Metadata } from 'next';

import Cart from './Index';

export const metadata: Metadata = {
  title: 'WeShop - Shopping Cart',
  description:
    'View and manage your shopping cart at WeShop before checking out.',
  openGraph: {
    title: 'WeShop - Shopping Cart',
    description: 'Review your items and proceed to checkout at WeShop.',
  },
};

const CartPage = () => {
  return <Cart />;
};

export default CartPage;
