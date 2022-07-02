import { Container, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Layout } from '../Layout'
import { CheckoutSteps } from './CheckoutSteps'

export const CheckoutView = () => {
  return (
    <Layout>
      <Flex>
        <CheckoutSteps />
        <Container>
          <Outlet />
        </Container>
      </Flex>
    </Layout>
  )
}