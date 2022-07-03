import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext, Delivery } from '../../context/CheckoutContext';

import { UserContext } from '../../context/UserContext';
import { Box, Button, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { OrderSummary } from './OrderSummary';
import { generateUUID } from '../../utils';

export const CheckoutPayment = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const checkoutContext = useContext(CheckoutContext);

  const handlePayment = () => {
    let orderItems = userContext?.cartItems;
    const uuid = generateUUID();
    userContext?.clearCart();
    navigate(`/checkout/confirmation/${uuid}`, {
      state: {
        paymentId: uuid,
        orderItems: orderItems,
      },
    });
  };

  return (
    <SimpleGrid columns={[1, null, 2]} spacing="10">
      <Flex justifyContent="center" alignItems="center">
        <Stack>
          <Text fontSize="xl">This is a dummy payment</Text>
          <Button colorScheme="facebook" onClick={handlePayment}>
            Make payment
          </Button>
        </Stack>
      </Flex>
      <Box>
        <Text mb="5">Order summary</Text>
        <OrderSummary cartItems={userContext?.cartItems} deliveryMethod={checkoutContext?.deliveryMethod} />
      </Box>
    </SimpleGrid>
  );
};
