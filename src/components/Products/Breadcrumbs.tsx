import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, Text } from '@chakra-ui/react';
import React from 'react';
import { Link, useParams } from 'react-router-dom';

type Props = {
  children?: React.ReactNode;
};

export const Breadcrumbs: React.FC<Props> = ({ children }) => {
  const params = useParams();

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Text fontWeight="bold">
          <Link to="/">
            Products
          </Link>
        </Text>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      {params.productId && (
        <BreadcrumbItem>
          <Text fontWeight="bold">{params.productId}</Text>
        </BreadcrumbItem>
      )}
    </Breadcrumb>
  );
};
