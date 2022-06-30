import { Box, Flex, Container } from '@chakra-ui/react';
import { Breadcrumbs } from '.';
import { Outlet } from 'react-router-dom';
import { Layout } from '../Layout';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

export const ProductsView = () => {
  const productContext = useContext(ProductContext);
  return (
    <Layout>
      <Container minW="container.lg" marginTop="5">
        <Breadcrumbs category={productContext?.category} />
        <Outlet />
      </Container>
    </Layout>
  );
};
