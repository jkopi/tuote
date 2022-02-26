import React from 'react';
import { Container } from '@chakra-ui/react';
import { Navbar } from '../Navbar';

type LayoutProps = {
  children?: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxW="full" h="full" border={1}>
      <Navbar />
      <main>{children}</main>
    </Container>
  );
};
