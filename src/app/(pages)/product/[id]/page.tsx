import { Metadata } from 'next';

import ProductDetails from './ProductDetails';

export const metadata: Metadata = {
  title: 'WeShop - Product Details',
  description:
    'View details of the selected product at WeShop, your destination for quality products.',
  openGraph: {
    title: 'WeShop - Product Details',
    description: 'Find more about the product with ID: [productId] on WeShop.',
  },
};
interface ProductPageProps {
  params: { name: string };
}
const ProductPage = ({ params }: ProductPageProps) => {
  return <ProductDetails params={params} />;
};

export default ProductPage;
