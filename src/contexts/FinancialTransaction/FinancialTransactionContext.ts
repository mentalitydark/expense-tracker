import { createContext } from 'react'

import type { IFinancialTransaction } from '../../models'

interface IFinancialTransactionContextProps {
  transactions: IFinancialTransaction[]
  getById: (id: IFinancialTransaction['id']) => IFinancialTransaction|undefined
  fetchTransactions: () => Promise<void>
  addTransaction: (transaction: IFinancialTransaction) => Promise<void>
  updateTransaction: (transaction: IFinancialTransaction) => Promise<void>
  removeTransaction: (transaction: IFinancialTransaction) => Promise<void>
}

export const FinancialTransactionContext = createContext<IFinancialTransactionContextProps>({} as IFinancialTransactionContextProps)
