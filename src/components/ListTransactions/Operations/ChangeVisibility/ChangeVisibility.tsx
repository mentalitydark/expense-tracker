import { useFinancialTransactions, useSelectTransactions } from '../../../../hooks'

export function ChangeVisibility() {
  const useFinancial = useFinancialTransactions()
  const useSelected = useSelectTransactions()

  const action = async () => {
    try {
      const promises: Promise<void>[] = []
  
      useSelected.values.forEach((id) => {
        const transaction = useFinancial.getById(id)
  
        if (!transaction) {
          return
        }
  
        transaction.visible = !transaction.visible
        promises.push(useFinancial.updateTransaction(transaction))
      })
  
      await Promise.all(promises)
    } catch (e) {
      console.error(e)
    }
  }
  
  const enabled = useSelected.values.length >= 1

  return (
    <button onClick={action} disabled={!enabled}><i className='fa-solid fa-eye-slash' /></button>
  )
}
