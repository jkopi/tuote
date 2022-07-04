import { Box, Flex, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartFill } from 'react-icons/ri';
import { Modal } from '../Modal';
import { UserContext } from '../../context/UserContext';
import { Login } from '../Login';
import { Cart } from '../Cart';
import ColorSwitch from '../ColorSwitch';

export const Navbar = () => {
  const { isOpen: isShoppingCartOpen, onClose: shoppingCartOnClose, onOpen: onShoppingCartOpen } = useDisclosure();
  const { isOpen: isLoginOpen, onClose: loginOnClose, onOpen: onLoginOpen } = useDisclosure();
  const userContext = useContext(UserContext);

  return (
    <>
      <Box maxW="full" p="2" backgroundColor="facebook.500">
        <Flex flexDirection="row" justify="space-between" alignItems="center">
          <Box rounded="lg" p="2">
            <Link to="/">
              <Text color="white" fontSize="xl" fontFamily="fantasy">tuote</Text>
            </Link>
          </Box>
          <Box display="flex" gap="5">
            <IconButton
              py="2"
              aria-label="cart-notification"
              size="lg"
              colorScheme="facebook"
              icon={
                <>
                  <RiShoppingCartFill />
                  {userContext?.cartItems.length !== 0 && (
                    <Box
                      as="span"
                      color="white"
                      position="absolute"
                      right="40px"
                      top="35px"
                      fontSize="0.9rem"
                      bgColor="facebook.900"
                      borderRadius="3xl"
                      zIndex="100"
                      p="5px"
                    >
                      {userContext?.cartItems.length}
                    </Box>
                  )}
                </>
              }
              onClick={onShoppingCartOpen}
            />
            <ColorSwitch />
          </Box>
        </Flex>
      </Box>
      <Modal isOpen={isShoppingCartOpen} onClose={shoppingCartOnClose} title="Shopping cart">
        <Cart />
      </Modal>
      <Modal isOpen={isLoginOpen} onClose={loginOnClose} title="Login" btnText="Login">
        <Login />
      </Modal>
    </>
  );
};
