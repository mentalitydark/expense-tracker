import type { PropsWithChildren } from 'react'

export function TableFoot({ children }: PropsWithChildren) {
  return (
    <tfoot>
      { children }
    </tfoot>
  )
}
