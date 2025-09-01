export interface NumberFieldProps {
  label: string
  id: string
  className?: string
}

export interface NumberFieldRef {
  setValue: (value: number) => void
  getValue: () => number
}
