import { useEffect, useRef } from 'react'

import type { TextFieldRef, NumberFieldRef, CheckboxFieldRef } from '../../../../components'

import { useFinancialTransactions, useOpen, useSelectTransactions } from '../../../../hooks'

export function useEditTransaction() {
  const useFinancial = useFinancialTransactions()
  const useSelected = useSelectTransactions()
  const _useOpen = useOpen()

  const fields = {
    description: useRef<TextFieldRef>(null),
    value: useRef<NumberFieldRef>(null),
    expense: useRef<CheckboxFieldRef>(null)
  }

  const enabled = useSelected.values.length === 1

  const submit = async () => {
    try {
      if (!enabled) {
        return
      }
  
      if (!fields.description.current || !fields.value.current || !fields.expense.current) {
        return
      }
  
      const transaction = useFinancial.getById(useSelected.values[0])
      if (!transaction) {
        return
      }
  
      transaction.description = fields.description.current.getValue()
      transaction.value = Number(fields.value.current.getValue()) * (fields.expense.current.getChecked() ? -1 : 1)
  
      await useFinancial.updateTransaction(transaction)
  
      _useOpen.close()
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (!_useOpen.opened || !enabled) {
      return
    }

    const transaction = useFinancial.getById(useSelected.values[0])
    if (!transaction) {
      return
    }

    if (fields.description.current) fields.description.current.setValue(transaction.description)
    if (fields.value.current) fields.value.current.setValue(Math.abs(transaction.value))
    if (fields.expense.current) fields.expense.current.setChecked(transaction.value < 0)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [_useOpen.opened, enabled])

  return {
    form: {
      open: _useOpen.open,
      close: _useOpen.close,
      opened: _useOpen.opened,
      submit,
      fields
    },
    enabled
  }
}
