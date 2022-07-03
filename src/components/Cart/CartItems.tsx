import React, { useContext } from 'react';
import { Box, Button, Flex, SimpleGrid, Spacer, Text } from '@chakra-ui/react';
import forage from '../../config/localForage';
import { UserContext } from '../../context/UserContext';
import { Product } from '../../interfaces/Product';
import { CartItem } from './CartItem';
import { calculateTotalCartPrice } from '../../utils';
import { useNavigate } from 'react-router-dom';

export const CartItems = () => {
  const userContext = useContext(UserContext);
  const navigate = useNavigate();

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
          <CartItem key={product.id} item={product} />
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
      <Box>
        <Button onClick={() => navigate("/checkout")}>Checkout</Button>
      </Box>
      {/* {userContext?.cartItems.length > 0 && (
        <Box>
          <Button>Checkout</Button>
        </Box>
      )} */}
    </>
  );
};
