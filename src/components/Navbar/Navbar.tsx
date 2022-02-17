import { Box, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine } from 'react-icons/ri';

export const Navbar: React.FC = () => {
  return (
    <Box maxW="full" p="2" rounded="lg" border="1px solid green">
      <Flex>
        <Box p="4" mr="2" rounded="lg" bg="facebook.800">
          <Text color="white"><Link to="/">Home</Link></Text>
        </Box>
        <Box p="4" rounded="lg" alignContent="center" bg="facebook.800">
          <Icon as={RiShoppingCartLine} color="white" />
        </Box>
      </Flex>
    </Box>
  );
};