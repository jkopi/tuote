import { Modal } from '@chakra-ui/react';
import React, { createContext, useState } from 'react';

type ProviderProps = {
  children: React.ReactNode;
};

type ModalContent = {
  title: string;
};

type ContextProps = {
  title: string;
  open: (content: ModalContent) => void;
  close: () => void;
};

export const ModalContext = createContext<ContextProps | undefined>(undefined);

const ModalProvider = ({ children }: ProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<string>('');

  const handleModalOpen = ({ title }: ModalContent) => {
    setModalContent(title);
    setIsOpen(!isOpen);
  };

  const handleModalClose = () => {
    setModalContent('');
    setIsOpen(!isOpen);
  };

  return (
    <ModalContext.Provider value={{ open: handleModalOpen, close: handleModalClose, title: modalContent }}>
      {children}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
