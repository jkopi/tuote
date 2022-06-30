import { AspectRatio, Box, Button, Flex, Icon, Image, Text, Tooltip } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Product } from '../../interfaces/Product';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Rating } from '.';
import { UserContext } from '../../context/UserContext';
import { originalPrice } from '../../utils';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const userContext = useContext(UserContext);

  return (
    <Flex p="2" w="full">
      <Box maxW="xs" w="full" bg="white" borderWidth="1px" overflow="hidden" rounded="lg" shadow="lg">
        <Flex justify="center">
          <Image src={product.thumbnail} maxH="xs" objectFit="cover" roundedTop="lg" alt={product.description} />
        </Flex>
        <Box p="2" fontSize="2xl" fontWeight="semibold" lineHeight="tight" color="facebook.800" isTruncated>
          <Link to={`/products/${product.id}`}>
            <Text>{product.title}</Text>
          </Link>
        </Box>
        <Box p="2">
          <Rating rating={product.rating} />
        </Box>
        <Box p="2">
          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box>
              <Text color="facebook.800">{product.description}</Text>
            </Box>
          </Flex>
          <Flex justifyContent="space-between" alignContent="center">
            <Box fontSize="xl" color="gray.800">
              {product.discountPercentage ? (
                <>
                  <Text mr="2" fontSize="2xl" fontWeight="bold" color="red.400">
                    {product.price},00 €
                  </Text>
                  <Text as="s" fontSize="xl" fontWeight="bold" color="gray.500">
                    {originalPrice(product.price, product.discountPercentage)} €
                  </Text>
                </>
              ) : (
                <Text>{product.price}</Text>
              )}
            </Box>
            <Tooltip label="Add to cart" placement="left-end">
              <Button
                colorScheme="facebook"
                disabled={!!userContext?.cartItems.find((item) => item.id === product.id)}
                onClick={() => {
                  userContext?.addCartItem(product);
                }}
              >
                <Icon as={RiShoppingCartLine} />
              </Button>
            </Tooltip>
          </Flex>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductCard;
