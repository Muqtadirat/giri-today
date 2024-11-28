import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export async function getProductsHandler() {
  const response = await axios.get(`${baseURL}/products`);

  return response.data;
}

export async function getProductHandler(id: string) {
  const response = await axios.get(`${baseURL}/product/${id}`);
  console.log(response.data);
  return response.data;
}
