import React, { useContext } from 'react';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContext';
import { Container } from './styles';

const Summary: React.FC = () => {
  const transactions = useContext(TransactionsContext);

  console.log(transactions);

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImage} alt="income section" />
        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImage} alt="income section" />
        </header>
        <strong>- R$100,00</strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="income section" />
        </header>
        <strong>R$900,00</strong>
      </div>
    </Container>
  );
};

export default Summary;
