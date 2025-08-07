import { useEffect, useState, type PropsWithChildren  } from 'react'

import type { IFinancialTransaction } from '../../models'

import { FinancialTransactionIndexedDbRepository } from '../../repositories'
import { FinancialTransactionService } from '../../services'

import { FinancialTransactionContext } from './FinancialTransactionContext'

const repository = new FinancialTransactionIndexedDbRepository()
const service = new FinancialTransactionService(repository)

export function FinancialTransactionProvider({ children }: PropsWithChildren) {
  const [repositoryOpened, setRepositoryOpened] = useState<boolean>(false)
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
    if (repositoryOpened) {
      fetchTransactions()
    }
  }, [repositoryOpened])

  useEffect(() => {
    const init = async () => {
      await repository.init()
      setRepositoryOpened(true)
    }

    init()
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
