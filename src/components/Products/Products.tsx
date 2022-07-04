import React, { useContext, useState } from 'react';
import { Box, SimpleGrid, Flex, Text, Button, Icon, VStack, Stack } from '@chakra-ui/react';
import { RiArrowLeftSFill, RiArrowLeftSLine, RiArrowRightSFill, RiArrowRightSLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { ProductContext } from '../../context/ProductContext';
import { Product } from '../../interfaces/Product';
import { fetchPaginatedProducts } from '../../requests';
import { Loader } from '../Loader';
import ProductCard from './ProductCard';
import { useCategories } from '../../hooks/query';
import { queryClient } from '../../App';

export const Products = () => {
  const productContext = useContext(ProductContext);
  const [limit, setLimit] = useState<number>(9); // limit of products
  const [skip, setSkip] = useState<number>(0); // how many products is wanted to be skipped
  const [pages, setPages] = useState<number>(1); // how many pages of products

  // get categories from react-query hook
  const categories = useCategories();

  // use paginated strategy for fetching products from API
  const { isLoading, data, isPreviousData, error, status } = useQuery(
    ['products', productContext?.category, skip],
    () => fetchPaginatedProducts(productContext?.category, limit, skip),
    {
      initialData: () => {
        const initialProducts = queryClient.getQueryData<Product[]>(['products', '', 0]) ?? [];
        if (initialProducts.length > 0) {
          return initialProducts;
        }
        return undefined;
      },
      keepPreviousData: true,
    }
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  return (
    <Flex flexDir={{ lg: 'row', sm: 'column' }}>
      {/* Categories */}
      <Box mt="4" w={{ sm: 'sm' }}>
        <Box mb="2">
          <Text fontSize="2xl" fontWeight="bold" colorScheme="facebook">
            Category
          </Text>
        </Box>
        <Text
          cursor="pointer"
          fontWeight="bold"
          colorScheme="facebook"
          _hover={{
            color: 'facebook.400',
            textDecoration: 'underline',
          }}
          onClick={() => productContext?.setCategory('')}
        >
          All categories
        </Text>
        <Stack align="flex-start" direction={{ sm: 'column' }}>
          {categories.data?.map((brand: string) => (
            <Box pr="2" key={brand}>
              <Text
                cursor="pointer"
                fontWeight="bold"
                colorScheme="facebook"
                _hover={{
                  color: 'facebook.400',
                  textDecoration: 'underline',
                }}
                onClick={() => productContext?.setCategory(brand)}
              >
                {brand}
              </Text>
            </Box>
          ))}
        </Stack>
      </Box>
      <Box maxW="container.lg">
        {/* Products */}
        <SimpleGrid maxW="container.lg" columns={[2, null, 3]} spacing="2">
          {status === 'success' &&
            data?.products.map((product: Product) => <ProductCard key={product.id} product={product} />)}
        </SimpleGrid>

        {/* Pagination */}
        <Flex maxW="container.lg" align="center" justify="center" marginTop="5" marginBottom="5">
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
            disabled={data!.length <= 9}
          >
            <Icon as={RiArrowRightSLine} fontSize="2xl" />
          </Button>
          <Button ml="4" disabled={data!.length <= 9}>
            <Icon as={RiArrowRightSFill} fontSize="2xl" />
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
