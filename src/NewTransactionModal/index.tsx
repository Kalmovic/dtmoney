import React from 'react';
import Modal from 'react-modal';

// import { Container } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
  >
    <h2>cadastrar transação</h2>
  </Modal>
  );
}

export default NewTransactionModal;