import { Box, Button, Flex, Icon, Text } from "@chakra-ui/react";
import React, { useContext } from "react";
import { RiDeleteBinLine, RiShareBoxLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import forage from '../../config/localForage';
import { UserContext } from '../../context/UserContext';
import { Product } from '../../interfaces/Product';
import { originalPrice } from '../../utils/product';

export const CartItems: React.FC = () => {
  const userContext = useContext(UserContext);

  if (userContext?.cartItems.length === 0) {
    return <Box>No items in cart</Box>
  }

  return (
    <Box>
      {userContext?.cartItems.map((item: Product) => (
        <Flex alignItems="center">
          <Box>
            <Text fontSize="lg">{item.title}</Text>
          </Box>
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              {originalPrice(item.price, item.discountPercentage)} €
            </Text>
          </Box>
          <Box alignItems="flex-end">
            <Link to={`/products/${item.id}`}>
              <Icon as={RiShareBoxLine} />
            </Link>
          </Box>
          <Box>
            <Button colorScheme="red" size="xs" onClick={() => userContext.removeCartItem(item.id)}>
              <Icon as={RiDeleteBinLine} />
            </Button>
          </Box>
        </Flex>
      ))}
    </Box>
  );
}