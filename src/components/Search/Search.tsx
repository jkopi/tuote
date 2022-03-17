import React, { useContext, useRef, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/react';
import { debounce } from 'lodash';
import { useQuery } from 'react-query';
import { FilterBy, ProductContext } from '../../context/ProductContext';
import { RiSoundModuleLine } from 'react-icons/ri';

export const Search = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [searchQuery, setSearchQuery] = useState<string>('');
  const productContext = useContext(ProductContext);
  const searchProducts = async () => await (await fetch(`https://dummyjson.com/products?limit=100`)).json();

  const products = useQuery(['filtered-products'], () => searchProducts(), {
    keepPreviousData: true,
  });

  const onInputChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(products);
    // setSearchQuery(e.target.value);
    // return products?.data.find((prod: Product) => prod.title.toLowerCase().includes(searchQuery))
  }, 300);

  return (
    <Box ref={ref}>
      <Flex align="center">
        <Input border="1px" borderColor="facebook.200" onChange={onInputChange} placeholder="Search products" />
        <Menu isLazy closeOnSelect={false}>
          <MenuButton as={Button}>
            <RiSoundModuleLine fontSize="2xl" />
          </MenuButton>
          <MenuList>
            <MenuOptionGroup defaultValue={productContext?.filterRule} title="Filters" type="radio">
              <MenuItemOption value="sale" onClick={() => productContext?.setFilterRule(FilterBy.SALE)}>On sale</MenuItemOption>
              <MenuItemOption value="original" onClick={() => productContext?.setFilterRule(FilterBy.ORIGINAL)}>Not on sale</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};
