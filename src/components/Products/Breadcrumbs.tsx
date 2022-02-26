import { Breadcrumb, BreadcrumbItem, BreadcrumbProps, BreadcrumbSeparator, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

type BCProps = BreadcrumbProps & {
  children?: React.ReactNode;
};

export const Breadcrumbs = ({ children }: BCProps) => {
  const params = useParams();

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Text fontWeight="bold" color="facebook.800">
          <Link to="/">
            Products
          </Link>
        </Text>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      {params.productId && (
        <BreadcrumbItem>
          <Text fontWeight="bold" color="facebook.800">{params.productId}</Text>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};
