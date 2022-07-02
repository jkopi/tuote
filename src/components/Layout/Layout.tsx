import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { Navbar } from '../Navbar';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Navbar />
      <Container maxW="full" h="full">{children}</Container>
    </main>
  );
};
