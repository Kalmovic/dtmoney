import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioButton } from './styles';
import closeImg from '../assets/close.svg';
import incomeImg from '../assets/income.svg';
import outcomeImg from '../assets/outcome.svg';
import { useTransactions } from '../hooks/useTransactions';

// import { Container } from './styles';

Modal.setAppElement('#root');

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createTransaction({
      title,
      value,
      category,
      type,
    });

    setTitle('');
    setValue(0);
    setCategory('');
    setType('income');
    onRequestClose();
  }

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
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Register transaction</h2>
        <input
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          type="number"
          placeholder="Value"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioButton
            type="button"
            onClick={() => setType('income')}
            isActive={type === 'income'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Income" />
            <span>Income</span>
          </RadioButton>
          <RadioButton
            type="button"
            onClick={() => setType('outcome')}
            isActive={type === 'outcome'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Outcome" />
            <span>Outcome</span>
          </RadioButton>
        </TransactionTypeContainer>

        <input
          placeholder="Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
        <button type="submit">Register</button>
      </Container>
    </Modal>
  );
}

export default NewTransactionModal;
