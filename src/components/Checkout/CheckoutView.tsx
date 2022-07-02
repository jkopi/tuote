import { Box, Container, Divider, Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'
import { Layout } from '../Layout'
import { CheckoutSteps } from './CheckoutSteps'

export const CheckoutView = () => {
  return (
    <Layout>
      <Box mt="8">
        <CheckoutSteps />
        <Box>
          <Divider my="20px"/>
          <Outlet />
        </Box>
      </Box>
    </Layout>
  )
}