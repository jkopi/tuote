import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { Delivery } from '../../context/CheckoutContext';
import { Product } from '../../interfaces';
import { calculateTotalCartPrice } from '../../utils';

type Props = {
  cartItems?: Product[];
  deliveryMethod?: Delivery;
};

export const OrderSummary = ({ cartItems, deliveryMethod }: Props) => {
  return (
    <Box>
      {cartItems?.map((item) => (
        <React.Fragment key={item.title}>
          <Flex gap="6">
            <Image width="100px" height="100px" rounded="lg" src={item.thumbnail} />
            <Text fontSize="lg">{item.title}</Text>
            <Box>
              <Text>{item.price},00 €</Text>
              <Text>Remove</Text>
            </Box>
          </Flex>
          <Divider my="20px" />
        </React.Fragment>
      ))}
      <Flex justify="space-between">
        <Box>
          <Text mb="10px">Subtotal</Text>
          <Text>Shipping</Text>
        </Box>
        <Box>
          <Text mb="10px">{cartItems ? `${calculateTotalCartPrice(cartItems)},00 €` : 0}</Text>
          <Text>{deliveryMethod === 'STANDARD' ? '15,00€' : '30,00€'}</Text>
        </Box>
      </Flex>
      <Divider my="20px" />
    </Box>
  );
};
