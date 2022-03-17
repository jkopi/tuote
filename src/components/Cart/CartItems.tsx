import React, { useContext } from 'react';
import { Box, Flex, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import forage from '../../config/localForage';
import { UserContext } from '../../context/UserContext';
import { Product } from '../../interfaces/Product';
import { CartItem } from './CartItem';
import { calculateTotalCartPrice } from '../../utils/product';

export const CartItems = () => {
  const userContext = useContext(UserContext);

  if (userContext?.cartItems.length === 0) {
    return <Box>No items in cart</Box>;
  }

  if (userContext?.cartItems) {
    console.log(calculateTotalCartPrice(userContext.cartItems));
  }

  return (
    <>
      <Box>
        {userContext?.cartItems.map((product: Product) => (
          <CartItem item={product} />
        ))}
      </Box>
      <SimpleGrid columns={3} alignSelf="end">
        <Box alignContent="flex-end">
          <Text>Total</Text>
        </Box>
        <Spacer />
        <Box alignContent="flex-end">
          <Text fontWeight="bold">{userContext?.cartItems ? calculateTotalCartPrice(userContext.cartItems) : 0} €</Text>
        </Box>
      </SimpleGrid>
    </>
  );
};
