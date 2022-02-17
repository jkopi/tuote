import axios from 'axios';
import { useQuery, UseQueryResult } from 'react-query';
import { Product } from '../interfaces/Product';

export async function fetchProducts() {
  const response = await axios.get<Product[]>('https://dummyjson.com/products');

  return response.data;
}

// TODO make this work
export function useProducts() {
  const queryResult: UseQueryResult<Product[], Error> = useQuery<Product[], Error>(['products'],
  async () => await fetchProducts());

  return { products: queryResult.data as Product[] ?? [], ...queryResult };
}
