import type { PropsWithChildren } from 'react'

interface ITableCellProps {
  align?: 'left' | 'center' | 'right'
  width?: number
}

export function TableCell({ children, align, width }: PropsWithChildren<ITableCellProps>) {
  return (
    <td align={align} width={width}>
      { children }
    </td>
  )
}
