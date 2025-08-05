import type { ReactNode } from 'react'

interface ITableProps {
  children: ReactNode
}

export function Table({ children }: ITableProps) {
  return (
    <table className='list-transactions-table' cellSpacing={0}>
      { children }
    </table>
  )
}
