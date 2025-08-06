import type { PropsWithChildren } from 'react'

interface ITableCellProps {
  align?: 'left' | 'center' | 'right'
  width?: number
  negative?: boolean
}

export function TableCell({ children, align, width, negative }: PropsWithChildren<ITableCellProps>) {
  return (
    <td align={align} width={width} className={`${negative === true ? 'negative' : (negative === false ? 'positive' : '')}`}>
      { children }
    </td>
  )
}
