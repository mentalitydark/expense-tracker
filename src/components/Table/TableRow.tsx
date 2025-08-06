import type { PropsWithChildren } from 'react'

interface ITableRowProps {
  visible?: boolean
}

export function TableRow({ children, visible }: PropsWithChildren<ITableRowProps>) {
  return (
    <tr className={`${visible ? 'visible' : ''}`}>
      { children }
    </tr>
  )
}
