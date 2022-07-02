import React, { useContext, useEffect } from 'react';
import {
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { RiHeartLine } from 'react-icons/ri';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { originalPrice } from '../../utils';
import { Rating } from './Rating';
import { UserContext } from '../../context/UserContext';
import { Loader } from '../Loader';
import { ProductContext } from '../../context/ProductContext';
import { useProduct } from '../../hooks/query';
import { ProductSkeleton } from './ProductSkeleton';

export const Product = () => {
  const userContext = useContext(UserContext);
  const productContext = useContext(ProductContext);
  const params = useParams();
  const productId = params.productId;

  const { isLoading, data, error } = useProduct(productId ?? '');

  if (isLoading) {
    return <ProductSkeleton/>;
  }

  if (error) {
    return <p>{JSON.stringify(error)}</p>;
  }

  if (data) {
    productContext?.setProduct(data.title);
  }

  return (
    <Box>
      {data && (
        <Flex pt="10" flexDirection={{ lg: 'row', md: 'column', sm: 'column' }}>
          <Box marginRight={{ lg: '4' }}>
            <Image src={data.thumbnail} alt={data.title} objectFit="cover" />
          </Box>
          <Box p="2">
            <Text fontSize="xl" fontWeight="light">
              {data.brand}
            </Text>
            <Heading as="h2" mb="2">
              {data.title}
            </Heading>
            <Box maxW="md">
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
              <Text mt="2" mb="2">
                {data.stock} remaining
              </Text>
              <Flex>
                <Button
                  w="full"
                  mr={2}
                  bg="facebook.200"
                  disabled={!!userContext?.cartItems.find((item) => item.id === data.id)}
                  onClick={() => userContext?.addCartItem(data)}
                >
                  Add to cart
                </Button>
                <Button bg="red.300">
                  <Icon as={RiHeartLine} />
                </Button>
              </Flex>
              <Divider my="5" />
              <Text fontSize="xl">{data.description}</Text>
            </Box>
          </Box>
        </Flex>
      )}
    </Box>
  );
};
