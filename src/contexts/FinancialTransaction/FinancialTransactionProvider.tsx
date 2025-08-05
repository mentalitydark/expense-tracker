import { useEffect, useState, type PropsWithChildren  } from 'react'

import type { IFinancialTransaction } from '../../models'

import { FinancialTransactionMemoryRepository } from '../../repositories'
import { FinancialTransactionService } from '../../services'

import { FinancialTransactionContext } from './FinancialTransactionContext'

const repository = new FinancialTransactionMemoryRepository()
const service = new FinancialTransactionService(repository)

export function FinancialTransactionProvider({ children }: PropsWithChildren) {
  const [transactions, setTransactions] = useState<IFinancialTransaction[]>([])

  const fetchTransactions = async () => {
    const data = await service.getAll()
    setTransactions(data)
  }

  const addTransaction = async (t: IFinancialTransaction) => {
    await service.add(t)
    await fetchTransactions()
  }

  const updateTransaction = async (t: IFinancialTransaction) => {
    await service.update(t)
    await fetchTransactions()
  }

  const removeTransaction = async (t: IFinancialTransaction) => {
    await service.remove(t)
    await fetchTransactions()
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <FinancialTransactionContext.Provider value={{
      transactions,
      fetchTransactions,
      addTransaction,
      updateTransaction,
      removeTransaction
    }}>
      { children }
    </FinancialTransactionContext.Provider>
  )
}
