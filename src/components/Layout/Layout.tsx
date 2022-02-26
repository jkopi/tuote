import React from 'react';
import { Box, Container, Skeleton } from '@chakra-ui/react';
import { Navbar } from '../Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Breadcrumbs, Products } from '../Products';
import App from '../../App';
import { Product } from '../Products';
import { CategoryList } from '../Category/CategoryList';
import { useQuery } from 'react-query';
import { UserProvider } from '../../context/UserContext';
import { ProductProvider } from '../../context/ProductContext';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <UserProvider>
      <ProductProvider>
        <Container maxW="full" h="full" border={1}>
          <Navbar />
          <main>{children}</main>
        </Container>
      </ProductProvider>
    </UserProvider>
  );
};
