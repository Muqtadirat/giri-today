import ProductDetails from './ProductDetails';

const ProductPage = ({ params }: { params: { id: string } }) => {
  return <ProductDetails params={params} />;
};

export default ProductPage;
