import { Metadata } from 'next';

import Home from './(pages)/home/Index';

export const metadata: Metadata = {
  title: 'WeShop - Quality Products for Every Occasion',
  description:
    'Shop a wide range of high-quality products at WeShop. Find everything you need, from gadgets to fashion, with fast shipping and great deals.',
  openGraph: {
    title: 'WeShop - Shop the Best Products Online',
    description:
      'Discover great deals on electronics, fashion, and more at WeShop. Shop now for exclusive offers.',
  },
};

const HomePage = () => {
  return <Home />;
};

export default HomePage;
