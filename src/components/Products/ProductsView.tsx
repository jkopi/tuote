import { Box, Flex, Container } from '@chakra-ui/react';
import { Breadcrumbs } from '.';
import { Outlet } from 'react-router-dom';
import { Layout } from '../Layout';
import { useContext } from 'react';

export const ProductsView = () => {
  return (
    <Layout>
      <Container minW="container.xl" marginTop="5">
        {/* <Breadcrumbs category={productContext?.category} /> */}
        <Breadcrumbs />
        <Outlet />
      </Container>
    </Layout>
  );
};
