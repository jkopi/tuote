import { Box, Button, Container, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import TuoteLogo from '../assets/tuote.svg';
import ProductPic from '../assets/product-pic.jpg';
import { useNavigate } from 'react-router-dom';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <Flex h="container.md" justifyContent="center" alignItems="center" flexDir={{ base: "row" }}>
      <Box maxW="lg">
        <Heading as="h1" fontSize="6xl" fontFamily="monospace">
          tuote
        </Heading>
        <Text fontSize="xl">
          A fictional shopping application made by utilizing{' '}
          <Link href="https://dummyjson.com/" color="facebook.300" isExternal>
            DummyJSON Product
          </Link>{' '}
          API
        </Text>
        <Button colorScheme="facebook" my="10" onClick={() => navigate("/products")}>Start shopping</Button>
      </Box>
      <Box>
        <Image w={250} src={ProductPic} rounded="3xl" />
      </Box>
    </Flex>
  );
};
