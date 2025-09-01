import { useImperativeHandle, useRef, useState, type ForwardedRef } from 'react'

import type { TextFieldRef } from './textField.types'

export function useTextField(ref: ForwardedRef<TextFieldRef>) {
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => ({
    setValue: (value: string) => {
      setInputValue(value)
    },
    getValue: () => {
      return inputValue
    },
    focus: () => {
      inputRef.current?.focus()
    }
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return {
    inputValue,
    handleChange,
    inputRef
  }
}
