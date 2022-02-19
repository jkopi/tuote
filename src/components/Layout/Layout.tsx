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

type Props = {};

export const Layout: React.FC = () => {
  return (
    <UserProvider>
      <Container maxW="full" h="full" border={1} bg="gray.200">
        <Navbar />
        <main>
          <Outlet/>
        </main>
      </Container>
    </UserProvider>
  );
};
