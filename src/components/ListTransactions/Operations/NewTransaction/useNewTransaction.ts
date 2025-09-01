import { useRef } from 'react'

import type { TextFieldRef, NumberFieldRef, CheckboxFieldRef } from '../../../../components'

import { useFinancialTransactions, useOpen } from '../../../../hooks'
import { FinancialTransaction } from '../../../../models'

export function useNewTransaction() {
  const useFinancial = useFinancialTransactions()
  const { open, close, opened } = useOpen()

  const fields = {
    description: useRef<TextFieldRef>(null),
    value: useRef<NumberFieldRef>(null),
    expense: useRef<CheckboxFieldRef>(null)
  }

  const submit = async () => {
    if (!fields.description.current || !fields.value.current || !fields.expense.current) {
      return
    }

    try {
      const transaction = new FinancialTransaction({
        description: fields.description.current.getValue(),
        value: fields.value.current.getValue() * (fields.expense.current.getChecked() ? -1 : 1),
      })

      await useFinancial.addTransaction(transaction)

      close()
    } catch (e) {
      console.error(e)
    }
  }

  return {
    form: {
      open,
      close,
      opened,
      submit,
      fields
    }
  }
}
