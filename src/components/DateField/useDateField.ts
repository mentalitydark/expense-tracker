import { useImperativeHandle, useState, type ForwardedRef } from 'react'

import type { DateFieldRef } from './dateField.types'


export function useDateField(ref: ForwardedRef<DateFieldRef>) {
  const [date, setDate] = useState((new Date()).toLocaleDateString('en-CA'))

  useImperativeHandle(ref, () => ({
    setDate: (v: Date) => {
      setDate(v.toLocaleDateString('en-CA'))
    },
    getDate: () => {
      return new Date(`${date}T00:00:00`)
    }
  }))

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }
  return {
    handleChange, date
  }
}
