import { useFinancialTransactions, useSelectTransactions } from '../../../../hooks'

export function RemoveTransactions() {
  const useFinancial = useFinancialTransactions()
  const useSelected = useSelectTransactions()

  const action = () => {
    useSelected.values.forEach((id) => {
      const transaction = useFinancial.transactions.find(t => t.id === id)

      if (!transaction) {
        return
      }
      
      useFinancial.removeTransaction(transaction)
    })

    useSelected.clear()
  }
  
  const enabled = useSelected.values.length >= 1

  return (
    <button onClick={action} disabled={!enabled} ><i className='fa-solid fa-trash' /></button>
  )
}
