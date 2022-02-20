import { Box, SimpleGrid, Skeleton, Flex, Container, Text, Button, Icon } from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiArrowLeftSFill, RiArrowLeftSLine, RiArrowRightSFill, RiArrowRightSLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { Product } from '../../interfaces/Product';
import { useProducts } from '../../requests';
import ProductCard from './ProductCard';

export const Products: React.FC = () => {
  // https://dummyjson.com/products?limit=9&skip=10
  const [limit, setLimit] = useState<number>(9); // limit of products
  const [skip, setSkip] = useState<number>(0); // how many products is wanted to be skipped
  const [pages, setPages] = useState<number>(1);

  const fetchProducts = (skipAmount = 0) =>
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skipAmount}`).then((res) => res.json());

  const { isLoading, data, isPreviousData, isFetching, error } = useQuery(
    ['products', skip],
    () => fetchProducts(skip),
    {
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <Skeleton height="20px" />;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <Flex p={4}>
      <Container maxW="container.lg">
        <Text>All Products</Text>
        <SimpleGrid maxW="container.lg" columns={[2, null, 3]} spacing="2">
          {data?.products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
        <Flex maxW="container.lg" align="center" justify="center">
          <Button
            mr="4"
            onClick={() => {
              setSkip(0);
              setPages(1);
            }}
            disabled={skip === 0}
          >
            <Icon as={RiArrowLeftSFill} fontSize="2xl" />
          </Button>
          <Button
            mr="4"
            onClick={() => {
              setSkip((prev) => Math.max(prev - 9, 0));
              setPages((prev) => prev - 1);
            }}
            disabled={skip === 0}
          >
            <Icon as={RiArrowLeftSLine} fontSize="2xl" />
          </Button>
          <Text>Page {pages} of ?</Text>
          <Button
            ml="4"
            onClick={() => {
              console.log(!isPreviousData);
              if (!isPreviousData) {
                setSkip((prev) => prev + 9);
                setPages((prev) => prev + 1);
              }
            }}
          >
            <Icon as={RiArrowRightSLine} fontSize="2xl" />
          </Button>
          <Button ml="4">
            <Icon as={RiArrowRightSFill} fontSize="2xl" />
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};
