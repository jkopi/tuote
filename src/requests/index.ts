import axios from 'axios';
import { Product } from '../interfaces/Product';

export const client = axios.create({ baseURL: 'https://dummyjson.com/products' });

export async function fetchProducts() {
  const { data } = await client.get<Product[]>('/products');

  return data;
}

export async function fetchProduct(productId: string) {
  const { data } = await client.get<Product>(`/${productId}`);

  return data;
}

export async function fetchPaginatedProducts(category?: string, limit?: number, skipAmount = 0) {
  const response = await client.get(`/${category ? '/category/' + category : ''}?limit=${limit}&skip=${skipAmount}`);

  return response.data;
}

export async function fetchCategories() {
  const { data } = await client.get<string[]>('/categories');

  return data;
}
