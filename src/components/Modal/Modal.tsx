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
  title: string;
  btnText?: string;
  children?: React.ReactNode;
};

export const MyModal = ({ isOpen, onClose, title, btnText, children, ...rest }: MyModalProps) => {
  return (
    <Modal {...rest} isOpen={isOpen} onClose={onClose} size="5xl" closeOnEsc>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button onClick={() => alert('to be implemented..')}>{btnText}</Button>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
