import React from 'react';
import { Box, Breadcrumb, BreadcrumbItem, BreadcrumbProps, BreadcrumbSeparator, Text } from '@chakra-ui/react';
import { Link, useParams } from 'react-router-dom';

type BCProps = BreadcrumbProps & {
  productName?: string;
  children?: React.ReactNode;
};

export const Breadcrumbs = ({ children }: BCProps) => {
  const params = useParams<{ category: string; productId: string }>();
  return (
    <Box>
      <Breadcrumb>
        <BreadcrumbItem>
          <Text fontWeight="thin" color="facebook.800">
            <Link to="/products">Products</Link>
          </Text>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Text fontWeight="thin" color="facebook.800">
            {params.category}
          </Text>
        </BreadcrumbItem>
      </Breadcrumb>
    </Box>
  );
};
