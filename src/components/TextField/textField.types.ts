export interface TextFieldProps {
  label: string
  id: string
  autofocus?: boolean
  className?: string
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface TextFieldRef {
  setValue: (value: string) => void
  getValue: () => string
  focus: () => void
}
