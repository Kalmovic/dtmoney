import React from 'react';
import incomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.value;
        acc.total += transaction.value;
      } else {
        if (transaction.type === 'outcome') {
          acc.outcome += transaction.value;
          acc.total -= transaction.value;
        }
      }
      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Income</p>
          <img src={incomeImage} alt="income section" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(summary.income)}
        </strong>
      </div>
      <div>
        <header>
          <p>Outcome</p>
          <img src={outcomeImage} alt="income section" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(summary.outcome)}
        </strong>
      </div>
      <div className="total">
        <header>
          <p>Total</p>
          <img src={totalImage} alt="income section" />
        </header>
        <strong>
          {new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
};

export default Summary;
