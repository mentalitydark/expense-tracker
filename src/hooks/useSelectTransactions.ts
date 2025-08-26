import { useContext } from 'react'

import { SelectTransactionsContext } from '../contexts'

export function useSelectTransactions() {
  const context = useContext(SelectTransactionsContext)

  if (!context) {
    throw new Error('useSelectTransactions deve ser usado dentro de SelectTransactionsProvider')
  }

  return context
}
