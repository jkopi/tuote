import { Box, HStack, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useQuery } from 'react-query';

export const CategoryList: React.FC = () => {
  const { isLoading, data, error } = useQuery('categories', () =>
    fetch('https://dummyjson.com/products/categories').then((res) => res.json())
  );

  return (
    <Stack direction={['column', 'row']}>
      {data ? data.map((category: string) => (
        <Box>
          <Text>{category}</Text>
        </Box>
      )) : null}
    </Stack>
  );
};
