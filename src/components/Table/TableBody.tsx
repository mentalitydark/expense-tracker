import type { PropsWithChildren } from 'react'

export function TableBody({ children }: PropsWithChildren) {
  return (
    <tbody>
      { children }
    </tbody>
  )
}
