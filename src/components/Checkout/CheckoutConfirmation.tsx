import { Box, Container, Divider, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { Location, useLocation } from 'react-router-dom';
import { CheckoutContext } from '../../context/CheckoutContext';
import { Product } from '../../interfaces';
import { calculateTotalCartPrice } from '../../utils';
import { OrderSummary } from './OrderSummary';

// extend Location inteface with order information
interface ConfirmationLocation extends Location {
  state: {
    paymentId: string;
    orderItems: Product[];
  };
}

export const CheckoutConfirmation = () => {
  const checkoutContext = useContext(CheckoutContext);
  const location = useLocation() as ConfirmationLocation;

  if (!location.state) {
    return <p>Order state not found!</p>;
  }

  return (
    <Container centerContent maxW="4xl" mb="36">
      <Box w="full">
        <Stack gap={4}>
          <Flex alignItems="center" gap="4" my="8">
            <Icon as={RiCheckboxCircleLine} color="whatsapp.600" w={10} h={10} />
            <Heading as="h1">Order summary</Heading>
          </Flex>
          <Box>
            <Text>Transaction <strong>{location.state.paymentId}</strong> was successfully made!</Text>
          </Box>
          <OrderSummary cartItems={location.state.orderItems} deliveryMethod={checkoutContext?.deliveryMethod} />
          <Flex justifyContent="space-between">
            <Text fontWeight="semibold">Total</Text>
            <Text fontWeight="semibold">{calculateTotalCartPrice(location.state.orderItems)},00 €</Text>
          </Flex>
        </Stack>
      </Box>
    </Container>
  );
};
