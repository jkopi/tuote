import { Box, Button, Container, Flex, Heading, Icon, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { RiHeartLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { useLocation, useParams } from 'react-router-dom';
import { originalPrice } from '../../utils/product';
import { Breadcrumbs } from './Breadcrumbs';
import { Rating } from './Rating';

export const Product: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  console.log(location.pathname.split('/'));

  const { isLoading, data, error } = useQuery(`product-${params.productId}`, () =>
    fetch(`https://dummyjson.com/products/${params.productId}`).then((res) => res.json())
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }


  return (
    <Container maxH="full" maxW="container.lg">
      <Flex p={2} justifyContent="start">
        <Box mt="2" mb="2">
          <Breadcrumbs />
        </Box>
      </Flex>
      <SimpleGrid columns={[1, null, 2]}>
        <Box>
          <Image src={data.thumbnail} />
        </Box>
        <Box p="2">
          <Text fontSize="xl" fontWeight="light">
            {data.brand}
          </Text>
          <Heading as="h2" mb="2">
            {data.title}
          </Heading>
          <Box maxW="md">
            <Text fontSize="xl">{data.description}</Text>
            <Flex>
              {data.discountPercentage ? (
                <>
                  <Text mr="2" fontSize="3xl" fontWeight="bold" color="red.400">
                    {data.price},00 €
                  </Text>
                  <Text as="s" fontSize="xl" fontWeight="bold" color="gray.500">
                    {originalPrice(data.price, data.discountPercentage)} €
                  </Text>
                </>
              ) : (
                <Text fontSize="3xl" fontWeight="bold">
                  {data.price},00 €
                </Text>
              )}
            </Flex>
            <Box fontSize="2xl">
              <Rating rating={data.rating} />
            </Box>
            <Text mt="2" mb="2">{data.stock} remaining</Text>
            <Flex>
              <Button w="full" mr={2} bg="facebook.200">
                Add to cart
              </Button>
              <Button bg="red.300">
                <Icon as={RiHeartLine} />
              </Button>
            </Flex>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
};
