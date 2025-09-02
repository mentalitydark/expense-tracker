export interface DateFieldProps {
  id: string
  label: string
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface DateFieldRef {
  setDate: (v: Date) => void
  getDate: () => Date
}
