import React, { useState } from 'react';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { TransactionsProvider } from './hooks/useTransactions';
import NewTransactionModal from './NewTransactionModal';
import { GlobalStyle } from './styles/global';

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(
    false
  );

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        onRequestClose={handleCloseNewTransactionModal}
        isOpen={isNewTransactionModalOpen}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
