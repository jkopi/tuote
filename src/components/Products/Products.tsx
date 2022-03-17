import { Box, SimpleGrid, Skeleton, Flex, Container, Text, Button, Icon } from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { RiArrowLeftSFill, RiArrowLeftSLine, RiArrowRightSFill, RiArrowRightSLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import forage from '../../config/localForage';
import { ProductContext } from '../../context/ProductContext';
import { Product } from '../../interfaces/Product';
import { fetchPaginatedProducts } from '../../requests';
import { Loader } from '../Loader';
import { Search } from '../Search';
import ProductCard from './ProductCard';

export const Products = () => {
  const productContext = useContext(ProductContext);
  const [limit, setLimit] = useState<number>(9); // limit of products
  const [skip, setSkip] = useState<number>(0); // how many products is wanted to be skipped
  const [pages, setPages] = useState<number>(1);

  const { isLoading, data, isPreviousData, error, status } = useQuery(
    ['products', productContext?.category,skip],
    () => fetchPaginatedProducts(productContext?.category, limit, skip),
    {
      keepPreviousData: true,
    }
  );

  console.log(data, status)

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <Flex p={4}>
      <Box maxW="container.lg">
        <Text pb="2">{productContext?.category}</Text>
        {/* <Search /> */}
        <SimpleGrid maxW="container.lg" columns={[2, null, 3]} spacing="2">
          {status === 'success' && data?.products?.map((product: Product) => (
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
            disabled={data!.length < 9}
          >
            <Icon as={RiArrowRightSLine} fontSize="2xl" />
          </Button>
          <Button
            ml="4"
            disabled={data!.length < 9}
          >
            <Icon as={RiArrowRightSFill} fontSize="2xl" />
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
