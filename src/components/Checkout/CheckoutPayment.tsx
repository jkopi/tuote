import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext, Delivery } from '../../context/CheckoutContext';

import { UserContext } from '../../context/UserContext';
import { Box, Button, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/react';
import { OrderSummary } from './OrderSummary';

export const CheckoutPayment = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const checkoutContext = useContext(CheckoutContext);
  return (
    <SimpleGrid columns={[1, null, 2]} spacing="10">
      <Flex justifyContent="center" alignItems="center">
        <Stack>
          <Text fontSize="xl">This is a dummy payment</Text>
          <Button colorScheme="facebook">Make payment</Button>
        </Stack>
      </Flex>
      <OrderSummary cartItems={userContext?.cartItems} deliveryMethod={checkoutContext?.deliveryMethod} />
    </SimpleGrid>
  );
};
