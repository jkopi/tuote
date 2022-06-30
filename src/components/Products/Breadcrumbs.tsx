import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbProps, BreadcrumbSeparator, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

type BCProps = BreadcrumbProps & {
  category?: string;
  productName?: string;
  children?: React.ReactNode;
};

export const Breadcrumbs = ({ category, children }: BCProps) => {
  return (
    <Box>
      <Text fontSize="5xl" fontWeight="thin">{category}</Text>
      <Breadcrumb>
        <BreadcrumbItem>
          <Text fontWeight="thin" color="facebook.800">
            <Link to="/products">Products</Link>
          </Text>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {category && (
          <BreadcrumbItem>
            <Text fontWeight="thin" color="facebook.800">
              {category}
            </Text>
          </BreadcrumbItem>
        )}
      </Breadcrumb>
    </Box>
  );
};
