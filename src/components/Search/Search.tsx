import React from 'react';
import { Box, Flex, Icon, Input } from '@chakra-ui/react';
import { RiSearch2Line } from 'react-icons/ri';
import { Product } from '../../interfaces/Product';

type SearchProps = {
  products?: Product[];
}

export const Search = ({ products }: SearchProps) => {
  const doSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(products)
    console.log(e.currentTarget.value);
  };

  return (
    <Flex align="center">
      <Input border="1px" borderColor="facebook.200"  onChange={doSearch} placeholder="Search products"/>
    </Flex>
  );
};
