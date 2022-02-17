import { Box, SimpleGrid, Skeleton, Flex, Container, Text } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';
import { Product as IProduct } from '../../interfaces/Product';
import { Breadcrumbs } from '.';
import ProductCard from './ProductCard';
import { fetchProducts, useProducts } from '../../requests';
import { Products } from './Products';
import { Product } from './Product';
import { Outlet } from 'react-router-dom';

export const ProductsView: React.FC = () => {
  const brands = useQuery('categories', () => fetch('https://dummyjson.com/products/categories').then(res => res.json()));

  return (
    <Flex p={4}>
      <Box maxH="full">
        <Text fontSize="2xl" fontWeight="bold" color="linkedin.900">
          Browse by categories
        </Text>
        {brands.data?.map((brand: string) => (
          <Text key={brand} color="twitter.900">
            {brand}
          </Text>
        ))}
      </Box>
      <Container maxW="container.lg">
        <Box>
          <Breadcrumbs />
        </Box>
        <Products />
      </Container>
    </Flex>
  );
};
