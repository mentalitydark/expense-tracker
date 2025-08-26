import { useState, type PropsWithChildren } from 'react'

import type { IFinancialTransaction } from '../../models'

import { SelectTransactionsContext } from './selectTransactionsContext'

export function SelectTransactionsProvider({ children }: PropsWithChildren) {
  const [values, setValues] = useState<IFinancialTransaction['id'][]>([])

  const add = (v: IFinancialTransaction['id']) => {
    setValues(prev => [...prev, v])
  }

  const remove = (v: IFinancialTransaction['id']) => {
    setValues(prev => prev.filter(a => a !== v))
  }

  const clear = () => {
    setValues([])
  }

  const defineValues = (v: IFinancialTransaction['id'][]) => {
    setValues(v)
  }

  return (
    <SelectTransactionsContext.Provider value={{
      add,
      remove,
      values,
      clear,
      defineValues
    }}>
      { children }
    </SelectTransactionsContext.Provider>
  )
}
