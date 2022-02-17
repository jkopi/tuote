import React from 'react';
import { Box, Container, Skeleton } from '@chakra-ui/react';
import { Navbar } from '../Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Breadcrumbs, Products } from '../Products';
import App from '../../App';
import { Product } from '../Products';
import { CategoryList } from '../Category/CategoryList';
import { useQuery } from 'react-query';

type Props = {};

export const Layout: React.FC = () => {
  const products = useQuery('products', () => (
    fetch('https://dummyjson.com/products').then(res => res.json())
  ));

  if (products.isLoading) {
    return <Skeleton height="20px" />;
  }

  if (products.error) {
    return <p>{JSON.stringify(products.error)}</p>
  }

  return (
    <Container maxW="full" h="full" border={1} bg="gray.200">
      <Navbar />
      <main>
        <Outlet/>
      </main>
    </Container>
  );
};
