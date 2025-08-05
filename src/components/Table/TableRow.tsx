import type { PropsWithChildren } from 'react'

export function TableRow({ children }: PropsWithChildren) {
  return (
    <tr>
      { children }
    </tr>
  )
}
