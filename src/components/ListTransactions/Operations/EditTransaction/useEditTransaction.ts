import { useEffect, useRef } from 'react'

import { useFinancialTransactions, useOpen, useSelectTransactions } from '../../../../hooks'

export function useEditTransaction() {
  const useFinancial = useFinancialTransactions()
  const useSelected = useSelectTransactions()
  const _useOpen = useOpen()

  const fields = {
    description: useRef<HTMLInputElement>(null),
    value: useRef<HTMLInputElement>(null)
  }

  const enabled = useSelected.values.length === 1

  const submit = async () => {
    try {
      if (!enabled) {
        return
      }
  
      if (!fields.description.current || !fields.value.current) {
        return
      }
  
      const transaction = useFinancial.getById(useSelected.values[0])
      if (!transaction) {
        return
      }
  
      transaction.description = fields.description.current.value
      transaction.value = Number(fields.value.current.value)
  
      await useFinancial.updateTransaction(transaction)
  
      fields.description.current.value = ''
      fields.value.current.value = ''
  
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

    if (fields.description.current) fields.description.current.value = transaction.description
    if (fields.value.current) {
      fields.value.current.value = transaction.value.toLocaleString('pt-br', {
        currency: 'BRL',
        minimumFractionDigits: 2, maximumFractionDigits: 2
      })

      fields.value.current.dispatchEvent(new Event('change'))
    }
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
