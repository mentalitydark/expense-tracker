import { useState } from 'react'

export function useOpen() {
  const [value, setValue] = useState<boolean>(false)

  const open = () => {
    setValue(true)
  }

  const close = () => {
    setValue(false)
  }

  return {
    opened: value,
    open,
    close
  }
}
