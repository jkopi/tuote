import { Button, Flex } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';
import { Hero } from '../Hero';
import { Layout } from '../Layout';

export const LandingView = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Hero />
      <Flex justifyContent="center" alignItems="center">
        <Button onClick={() => navigate("/products")}>Start shopping</Button>
      </Flex>
    </Layout>
  )
}