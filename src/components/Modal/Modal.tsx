import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from '@chakra-ui/react';
import React from 'react';

type MyModalProps = ModalProps & {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export const MyModal = ({ isOpen, onClose, children, ...rest }: MyModalProps) => {
  return (
    <Modal {...rest} isOpen={isOpen} onClose={onClose} size="5xl" closeOnEsc>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Shopping Cart</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={() => alert('no u')}>Checkout</Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
