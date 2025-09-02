export interface NumberFieldProps {
  label: string
  id: string
  className?: string
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface NumberFieldRef {
  setValue: (value: number) => void
  getValue: () => number
}
