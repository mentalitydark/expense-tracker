import { useImperativeHandle, useState, type ForwardedRef } from 'react'

import type { CheckboxFieldRef } from './checkboxField.types'


export function useChecboxField(ref: ForwardedRef<CheckboxFieldRef>, initialValue = false) {
  const [value, setValue] = useState(initialValue)

  useImperativeHandle(ref, () => ({
    setChecked: (checked: boolean) => setValue(checked),
    getChecked: () => value
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked)
  }

  return { value, handleChange }
}
