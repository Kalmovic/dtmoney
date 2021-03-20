import React, { useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioButton } from './styles';
import closeImg from '../assets/close.svg';
import incomeImg from '../assets/income.svg';
import outcomeImg from '../assets/outcome.svg';

// import { Container } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

function NewTransactionModal({isOpen, onRequestClose}:NewTransactionModalProps) {
  const [type, setType] = useState('income');

  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button
      type="button" 
      onClick={onRequestClose} 
      className="react-modal-close">
        <img src={closeImg} alt="Close modal"/>
    </button>
    <Container>
      <h2>Register transaction</h2>
      <input placeholder="Title"/>
      <input type="number" placeholder="Value"/>

      <TransactionTypeContainer>
        <RadioButton
          type="button"
          onClick={() => setType('income')}
          isActive={type === 'income'}
          activeColor='green'
        >
          <img src={incomeImg} alt="Income"/>
          <span>Income</span>
        </RadioButton>
        <RadioButton
          type="button" 
          onClick={() => setType('outcome')}
          isActive={type === 'outcome'}
          activeColor='red'

        >
          <img src={outcomeImg} alt="Outcome"/>
          <span>Outcome</span>
        </RadioButton>
      </TransactionTypeContainer>

      <input placeholder="Category"/>
      <button type="submit">Register</button>

    </Container>
  </Modal>
  );
}

export default NewTransactionModal;