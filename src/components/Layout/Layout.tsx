import React from 'react';
import { Container } from '@chakra-ui/react';
import { Navbar } from '../Navbar';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <main>
      <Navbar />
      <Container maxW="full" maxH="full">{children}</Container>
    </main>
  );
};
