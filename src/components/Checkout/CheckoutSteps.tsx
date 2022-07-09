import { Breadcrumb, BreadcrumbItem, Text, useColorMode } from '@chakra-ui/react';
import { BsChevronRight } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

export const CheckoutSteps = () => {
  const mode = useColorMode();
  const location = useLocation();
  console.log(mode.colorMode)

  let txtColor = mode.colorMode === "dark" ? "white" : "black";

  return (
    <Breadcrumb spacing="8px" separator={<BsChevronRight />}>
      <BreadcrumbItem color={location.pathname === '/checkout' ? 'facebook.300' : txtColor}>
        <Text>Shipping</Text>
      </BreadcrumbItem>
      <BreadcrumbItem color={location.pathname === '/checkout/payment' ? 'facebook.300' : txtColor}>
        <Text>Payment</Text>
      </BreadcrumbItem>
      <BreadcrumbItem color={location.pathname.includes('/checkout/confirmation/') ? 'facebook.300' : txtColor}>
        <Text>Confirmation</Text>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};
