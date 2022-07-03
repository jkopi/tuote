import { Box, Button, Divider, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutContext, Delivery } from '../../context/CheckoutContext';

import { UserContext } from '../../context/UserContext';
import { OrderSummary } from './OrderSummary';

export const Checkout = () => {
  const navigate = useNavigate();
  const userContext = useContext(UserContext);
  const checkoutContext = useContext(CheckoutContext);

  return (
    <SimpleGrid columns={[1, null, 2]} spacing="10">
      <Box>
        <Text fontSize="lg">Contact information</Text>
        <Box mt="2">
          <Text>John Doe</Text>
          <Text>johndoe@foo.bar</Text>
        </Box>
        <Divider my="20px" />
        <Box>
          <Text fontSize="lg" mb="5">
            Shipping information
          </Text>
        </Box>
        <Divider my="20px" />
        <Box>
          <Text fontSize="lg" mb="5">
            Delivery method
          </Text>
          <Flex>
            <Box
              width="full"
              padding="15px"
              mr="4"
              border="2px"
              borderColor={checkoutContext?.deliveryMethod === 'STANDARD' ? 'facebook.600' : 'gray.200'}
              rounded="lg"
              cursor="pointer"
              onClick={() => checkoutContext?.setDeliveryMethod(Delivery.STANDARD)}
            >
              <Text>Standard shipping</Text>
              <Text>15€</Text>
            </Box>
            <Box
              width="full"
              padding="15px"
              border="2px"
              borderColor={checkoutContext?.deliveryMethod === 'EXPRESS' ? 'facebook.600' : 'gray.200'}
              rounded="lg"
              cursor="pointer"
              onClick={() => checkoutContext?.setDeliveryMethod(Delivery.EXPRESS)}
            >
              <Text>Express shipping</Text>
              <Text>30€</Text>
            </Box>
          </Flex>
          <Button width="full" colorScheme="facebook" my="10" onClick={() => navigate('/checkout/payment')}>
            Proceed to payment
          </Button>
        </Box>
      </Box>
      <OrderSummary cartItems={userContext?.cartItems} deliveryMethod={checkoutContext?.deliveryMethod} />
    </SimpleGrid>
  );
};
