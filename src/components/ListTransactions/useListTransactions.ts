import { type ChangeEvent } from 'react'

import { useFinancialTransactions, useSelectTransactions } from '../../hooks'

export function useListTransactions() {
  const useFinancial = useFinancialTransactions()
  const useSelected = useSelectTransactions()

  const onSelectOne = ({ target }: ChangeEvent<HTMLInputElement>) => {
    if (!target.checked) {
      useSelected.remove(target.id)
      return
    }

    useSelected.add(target.id)
  }

  const allSelected = useFinancial.transactions.length > 0 && useSelected.values.length === useFinancial.transactions.length

  const onSelectAll = (checked: boolean) => {
    if (checked) {
      const allIds = useFinancial.transactions.map(t => t.id)
      useSelected.defineValues(allIds)
    } else {
      useSelected.clear()
    }
  }

  return {
    data: useFinancial.transactions,
    onSelectOne,
    allSelected,
    onSelectAll,
    selectedIds: useSelected.values
  }
}
