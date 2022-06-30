import { useQuery, UseQueryResult } from 'react-query';
import { Product } from '../interfaces';
import { fetchProduct } from '../requests';

// fetch categories from api
export function useCategories(): UseQueryResult<string[], Error> {
  return useQuery('categories', () => fetch('https://dummyjson.com/products/categories').then((res) => res.json()));
}

// fetch a single product by id
export function useProduct(productId: string): UseQueryResult<Product, Error> {
  return useQuery(`product-${productId}`, () => fetchProduct(productId));
}

// cannot figure out why this is not working.. todo: figure out..
export function usePaginatedProducts(skip = 0, limit: number, category: string): UseQueryResult<Product[], Error> {
  return useQuery<Product[], Error>(
    ['products', category, skip],
    () =>
      fetch(
        `https://dummyjson.com/products${category ? '/category/' + category : ''}?limit=${limit}&skip=${skip}`
      ).then((res) => res.json()) ?? [],
    {
      keepPreviousData: true,
    }
  );
}
