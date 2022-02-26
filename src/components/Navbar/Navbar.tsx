import { Box, Flex, Icon, IconButton, Text, useDisclosure } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RiShoppingCartLine, RiHome4Line } from 'react-icons/ri';
import { Modal } from '../Modal';
import { CartItems } from '../Cart';
import { UserContext } from '../../context/UserContext';
import { css } from '@emotion/react';

export const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
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
            onClick={onOpen}
          />
          {/* <Box p="4" rounded="lg" alignContent="center" bg="facebook.200">
            <Icon as={RiShoppingCartLine} cursor="pointer" color="facebook.800" onClick={onOpen} />
          </Box> */}
        </Flex>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <CartItems />
      </Modal>
    </>
  );
};
