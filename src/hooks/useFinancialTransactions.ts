import { useContext } from 'react'

import { FinancialTransactionContext } from '../contexts'

export function useFinancialTransactions() {
  const context = useContext(FinancialTransactionContext)

  if (!context) {
    throw new Error('useFinancialTransactions deve ser usado dentro de FinancialTransactionProvider')
  }

  return context
}
