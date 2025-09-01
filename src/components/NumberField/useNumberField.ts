import { useImperativeHandle, useState, type ForwardedRef } from 'react'

import type { NumberFieldRef } from './numberFields.types'

export function useNumberField(ref: ForwardedRef<NumberFieldRef>) {
  const [inputValue, setInputValue] = useState('')

  useImperativeHandle(ref, () => ({
    setValue: (value: number) => {
      setInputValue(value.toLocaleString('pt-br', {
        currency: 'BRL',
        minimumFractionDigits: 2, maximumFractionDigits: 2
      }))
    },
    getValue: () => {
      const normalized = inputValue.replace(/[^\d]/g, '')
      return Number(normalized)/100 || 0
    }
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^\d]/g, '')
    setInputValue((Number(rawValue)/100).toLocaleString('pt-br', {
      currency: 'BRL',
      minimumFractionDigits: 2, maximumFractionDigits: 2
    }))
  }

  return {
    inputValue,
    handleChange
  }
}
