import React, { useContext, useEffect } from 'react';
import { Box, Flex, Container, Text } from '@chakra-ui/react';
import { useQuery } from 'react-query';
import { Breadcrumbs } from '.';
import { Outlet } from 'react-router-dom';
import { Layout } from '../Layout';
import { ProductContext } from '../../context/ProductContext';

export const ProductsView = () => {
  const productContext = useContext(ProductContext);
  const categories = useQuery('categories', () => fetch('https://dummyjson.com/products/categories').then(res => res.json()));
  console.log("selected:",productContext?.category)
  
  return (
    <Layout>
      <Flex p={4}>
        <Box maxH="full">
          <Box mb="2">
            <Text fontSize="2xl" fontWeight="bold" color="linkedin.900">
              Browse by categories
            </Text>
          </Box>
          {categories.data?.map((brand: string) => (
            <Text
              key={brand}
              cursor="pointer"
              fontWeight="bold"
              color="twitter.900"
              _hover={{
                color: "facebook.400",
                textDecoration: "underline"
              }}
              onClick={() => productContext?.setCategory(brand)}
            >
              {brand}
            </Text>
          ))}
        </Box>
        <Container maxW="container.lg">
          <Box>
            <Breadcrumbs />
          </Box>
          <Outlet />
        </Container>
      </Flex>
    </Layout>
  );
};
