import { Box, Flex, Icon, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine, RiHome4Line, RiLoginBoxLine, RiLogoutBoxLine } from 'react-icons/ri';
import { Modal } from '../Modal';
import { UserContext } from '../../context/UserContext';
import { css } from '@emotion/react';
import { Login } from '../Login';
import { Cart } from '../Cart';

export const Navbar = () => {
  const { isOpen: isShoppingCartOpen, onClose: shoppingCartOnClose, onOpen: onShoppingCartOpen } = useDisclosure();
  const { isOpen: isLoginOpen, onClose: loginOnClose, onOpen: onLoginOpen } = useDisclosure();
  const userContext = useContext(UserContext);

  return (
    <>
      <Box maxW="full" p="2" rounded="lg">
        <Flex flexDirection="row" justify="space-between">
          <Box p="4" mr="2" rounded="lg">
            <Link to="/">
              <Icon as={RiHome4Line} h="6" w="6" />
            </Link>
          </Box>
          {/* <IconButton
            aria-label="auth-icon"
            icon={
              userContext?.isAuthenticated ? (
                <Box display="flex" alignItems="center" px="2">
                  logged in <RiLogoutBoxLine />
                </Box>
              ) : (
                <RiLoginBoxLine />
              )
            }
            onClick={onLoginOpen}
          /> */}
          <IconButton
            css={css`
              position: relative !important;
            `}
            py="2"
            aria-label="cart-notification"
            size="lg"
            icon={
              <>
                <RiShoppingCartLine />
                {userContext?.cartItems.length !== 0 && (
                  <Box
                    as="span"
                    color="white"
                    position="absolute"
                    right="40px"
                    top="35px"
                    fontSize="0.9rem"
                    bgColor="facebook.500"
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
          {/* <Box p="4" rounded="lg" alignContent="center" bg="facebook.200">
            <Icon as={RiShoppingCartLine} cursor="pointer" color="facebook.800" onClick={onOpen} />
          </Box> */}
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
