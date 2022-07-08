import { Box, Stack, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { ProductContext } from '../../context/ProductContext';

type Props = {
  categories: string[];
};

export const CategoryList = ({ categories }: Props) => {
  const productContext = useContext(ProductContext);

  return (
    <Box mt="4" w={{ 'md': 1/4}}>
      <Text
        cursor="pointer"
        fontWeight="bold"
        colorScheme="facebook"
        _hover={{
          color: 'facebook.400',
          textDecoration: 'underline',
        }}
        onClick={() => productContext?.setCategory('')}
      >
        All categories
      </Text>
      <Stack align="flex-start" direction={{ sm: 'column' }}>
        {categories.map((brand: string) => (
          <Box pr="2" key={brand}>
            <Text
              cursor="pointer"
              fontWeight="bold"
              colorScheme="facebook"
              _hover={{
                color: 'facebook.400',
                textDecoration: 'underline',
              }}
              onClick={() => productContext?.setCategory(brand)}
            >
              {brand}
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
