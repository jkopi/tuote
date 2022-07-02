import { Breadcrumb, BreadcrumbItem, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { BsChevronRight } from 'react-icons/bs';
import { useLocation, useParams } from 'react-router-dom';
import { CheckoutContext } from '../../context/CheckoutContext';

export const CheckoutSteps = () => {
  const checkoutContext = useContext(CheckoutContext);
  const location = useLocation();
  console.log(location.pathname.split('/'));
  return (
    <Breadcrumb spacing="8px" separator={<BsChevronRight />}>
      <BreadcrumbItem color={checkoutContext?.phase === 'CHECKOUT' ? 'facebook.300' : 'black'}>
        <Text>Shipping</Text>
      </BreadcrumbItem>
      <BreadcrumbItem color={checkoutContext?.phase === 'PAYMENT' ? 'facebook.300' : 'black'}>
        <Text>Payment</Text>
      </BreadcrumbItem>
      <BreadcrumbItem color={checkoutContext?.phase === 'CONFIRMATION' ? 'facebook.300' : 'black'}>
        <Text>Confirmation</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
