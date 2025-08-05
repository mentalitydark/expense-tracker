import { type ChangeEvent } from 'react'

import type { IFinancialTransaction } from '../../models'

import { useFinancialTransactions } from '../../hooks'

export function useListTransactions() {
  const useFinancial = useFinancialTransactions()
  const transactionsSelected = new Map<string, IFinancialTransaction>()

  const onClickCheckbox = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.checked) {
      transactionsSelected.delete(target.id)
      return
    }

    const transaction = useFinancial.transactions.find(t => t.id === target.id)
    
    if (transaction) {
      transactionsSelected.set(transaction.id, transaction)
    }
  }

  const removeTransactionsSelected = () => {
    transactionsSelected.forEach((transaction) => {
      useFinancial.removeTransaction(transaction)
    })

    transactionsSelected.clear()
  }

  return {
    data: useFinancial.transactions,
    onClickCheckbox,
    removeTransactionsSelected
  }
}
