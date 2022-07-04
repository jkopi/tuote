import { AspectRatio, Box, Button, Flex, Icon, Image, Text, Tooltip } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Product } from '../../interfaces/Product';
import { Link, useNavigate } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';
import { Rating } from '.';
import { UserContext } from '../../context/UserContext';
import { originalPrice } from '../../utils';

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);

  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" cursor="pointer">
      <Image
        src={product.thumbnail}
        h={300}
        w={300}
        objectFit="contain"
        roundedTop="lg"
        alt={product.description}
        onClick={() => navigate(`/products/${product.category}/${product.id}`)}
      />
      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" noOfLines={1}>
          {product.title}
        </Box>
        <Flex justifyContent="space-between">
          {product.discountPercentage ? (
            <Box display="flex" justifyContent="center" alignItems="center">
              <Text mr="2" fontSize="2xl" fontWeight="bold" color="red.400">
                {product.price},00 €
              </Text>
              <Text as="s" fontSize="lg" fontWeight="bold" color="gray.500">
                {originalPrice(product.price, product.discountPercentage)} €
              </Text>
            </Box>
          ) : (
            <Text>{product.price}</Text>
          )}
          <Button
            size="sm"
            colorScheme="facebook"
            disabled={!!userContext?.cartItems.find((item) => item.id === product.id)}
            onClick={() => {
              userContext?.addCartItem(product);
            }}
          >
            <Icon as={RiShoppingCartLine} />
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
