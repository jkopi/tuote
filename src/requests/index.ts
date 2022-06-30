import axios from 'axios';
import { Product } from '../interfaces/Product';

export async function fetchProducts() {
  const { data } = await axios.get<Product[]>('https://dummyjson.com/products');

  return data;
}

export async function fetchProduct(productId: string) {
  const response = await axios.get<Product>(`https://dummyjson.com/products/${productId}`)

  return response.data;
}

export async function fetchPaginatedProducts(category?: string, limit?: number, skipAmount = 0) {
  const response = await axios.get(
    `https://dummyjson.com/products${category ? '/category/' + category : ''}?limit=${limit}&skip=${skipAmount}`
  );

  return response.data;
}
