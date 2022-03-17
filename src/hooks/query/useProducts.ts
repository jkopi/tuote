import axios from 'axios';
import { useMemo } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { Product } from '../../interfaces';

  // const { data, ...rest }: UseQueryResult<Product[], Error> = useQuery<Product[], Error>(
  //   ['products'],
  //   async () => await fetchProducts()
  // );
  // console.log({ products: (data as Product[]) ?? [], ...rest });
  // return { products: (data as Product[]) ?? [], ...rest };

// TODO: figure out why custom queries are not working
// export function usePaginatedProducts(
//   skipAmount = 0,
//   productLimit: number,
//   category: string
// ): UseQueryResult<Product[], Error> {
//   return useQuery(['products', category, skipAmount], () => fetchPaginatedProducts(productLimit, skipAmount), {
//     keepPreviousData: true,
//   });
// }
