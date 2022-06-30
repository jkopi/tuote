import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { Navbar } from '../Navbar';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxW="full" h="full">
      <Navbar />
      <main>{children}</main>
    </Container>
  );
};
