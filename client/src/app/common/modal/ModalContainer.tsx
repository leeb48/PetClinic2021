import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from '@chakra-ui/react';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useStore } from '../../store/store';

const ModalContainer = () => {
  const { modalStore } = useStore();

  return (
    <>
      <Modal isOpen={modalStore.modal.open} onClose={modalStore.closeModal}>
        <ModalOverlay />
        <ModalContent py={5}>
          <ModalCloseButton />
          <ModalBody>{modalStore.modal.body}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default observer(ModalContainer);
