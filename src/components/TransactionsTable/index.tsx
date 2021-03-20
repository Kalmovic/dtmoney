import React, { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface Transaction {
    id: number,
    title: string,
    value: number,
    type: string,
    category: string,
    createdAt: string,
}

const TransactionsTable: React.FC = () => {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions));
  }, []);
  return (
      <Container>
          <table>
              <thead>
                  <tr>
                      <th>Title</th>
                      <th>Value</th>
                      <th>Category</th>
                      <th>Date</th>
                  </tr>
              </thead>

              <tbody>
                  {transactions.map(transaction => {
                      return (
                        <tr key={transaction.id}>
                        <td>
                        {transaction.title}
                        </td>
                        <td className={transaction.type}>{`R$ ${transaction.value}`}</td>
                        <td>{transaction.category}</td>
                        <td>{transaction.createdAt}</td>
                    </tr>
                      )
                  })}
              </tbody>
          </table>
      </Container>
  );
}

export default TransactionsTable;