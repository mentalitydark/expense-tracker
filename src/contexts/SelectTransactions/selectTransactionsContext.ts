import { createContext } from 'react'

import type { IFinancialTransaction } from '../../models'

interface ISelectTransactionsContextProps {
  values: IFinancialTransaction['id'][]
  add: (v: IFinancialTransaction['id']) => void
  remove: (v: IFinancialTransaction['id']) => void
  clear: () => void
  defineValues: (v: IFinancialTransaction['id'][]) => void
}

export const SelectTransactionsContext = createContext<ISelectTransactionsContextProps>({} as ISelectTransactionsContextProps)
