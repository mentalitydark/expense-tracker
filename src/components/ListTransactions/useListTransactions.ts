import { useFinancialTransactions } from '../../hooks'

export function useListTransactions() {
  const useFinancial = useFinancialTransactions()

  return {
    data: useFinancial.transactions
  }
}
