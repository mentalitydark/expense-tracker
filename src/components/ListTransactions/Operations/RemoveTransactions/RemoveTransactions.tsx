import { useFinancialTransactions, useSelectTransactions } from '../../../../hooks'

export function RemoveTransactions() {
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
        
        promises.push(useFinancial.removeTransaction(transaction))
      })

      await Promise.all(promises)

      useSelected.clear()
    } catch (e) {
      console.error(e)
    }
  }
  
  const enabled = useSelected.values.length >= 1

  return (
    <button onClick={action} disabled={!enabled} ><i className='fa-solid fa-trash' /></button>
  )
}
