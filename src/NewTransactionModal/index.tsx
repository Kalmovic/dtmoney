import React from 'react';
import Modal from 'react-modal';
import { Container } from '../components/TransactionsTable/styles';

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
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <Container>
      <h2>cadastrar transação</h2>
      <input placeholder="Title"/>
      <input type="number" placeholder="Value"/>
      <input placeholder="Category"/>
      <button type="submit">Register</button>

    </Container>
  </Modal>
  );
}

export default NewTransactionModal;