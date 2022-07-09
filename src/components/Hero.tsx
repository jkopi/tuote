import { Box, Button, Container, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import ProductPic from '../assets/product-pic.jpg';
import { useNavigate } from 'react-router-dom';
import { useAppMediaQuery } from '../hooks';

export const Hero = () => {
  const navigate = useNavigate();
  const media = useAppMediaQuery();

  return (
    <Box
      h="calc(100vh - 10vh)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection={media.largerThanMd ? 'row' : 'column'}
    >
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
        <Button colorScheme="facebook" my="10" onClick={() => navigate('/products')}>
          Start shopping
        </Button>
      </Box>
      <Box>
        <Image w={media.largerThanMd ? 250 : 250} src={ProductPic} rounded="3xl" />
      </Box>
    </Box>
  );
};
