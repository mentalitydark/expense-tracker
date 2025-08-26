import { useRef } from 'react'

import { useFinancialTransactions, useOpen } from '../../../../hooks'
import { FinancialTransaction } from '../../../../models'

export function useNewTransaction() {
  const useFinancial = useFinancialTransactions()
  const { open, close, opened } = useOpen()

  const refs = {
    description: useRef<HTMLInputElement>(null),
    value: useRef<HTMLInputElement>(null)
  }

  const submit = async () => {
    if (!refs.description.current || !refs.value.current) {
      return
    }

    try {
      const transaction = new FinancialTransaction({
        description: refs.description.current.value,
        value: Number(refs.value.current.value)
      })

      await useFinancial.addTransaction(transaction)

      refs.description.current.value = ''
      refs.value.current.value = ''

      close()
    } catch (e) {
      console.error(e)
    }
  }

  return {
    refs,
    submit,
    openForm: open,
    closeForm: close,
    formOpened: opened
  }
}
