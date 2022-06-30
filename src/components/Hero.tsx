import { Box, Container, Flex, Image, Link, Text } from '@chakra-ui/react';
import TuoteLogo from '../assets/tuote.svg';
import HeroBg from '../assets/herobg.jpg';

export const Hero = () => {
  return (
    <Container height={{
        base: "sm",
        md: "container.sm",
        lg: "container.sm"
      }} maxW="full" border="1px">
      <Flex width="full" height="full" justifyContent="center" alignItems="center" flexDir="column">
      {/* <Image src={HeroBg} position="absolute" width="100%" height="100%" zIndex="hide" /> */}
        <Image width="lg" src={TuoteLogo} alt="tuote logo" />
        <Text fontSize="2xl" marginTop="5">
          A fictional shopping application made by utilizing{' '}
          <Link href="https://dummyjson.com/" color="facebook.300" isExternal>
            DummyJSON Product
          </Link>{' '}
          API
        </Text>
      </Flex>
    </Container>
  );
};
