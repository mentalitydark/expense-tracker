import type { ReactNode } from 'react'

import { TableRow } from './TableRow'

interface ITableHeadProps {
  columns: {name: ReactNode, colspan?: number}[]
}

export function TableHead({ columns }: ITableHeadProps) {
  return (
    <thead>
      <TableRow>
        {
          columns.map((column) => (
            <th key={`${crypto.randomUUID()}`} colSpan={column.colspan}>{column.name}</th>
          ))
        }
      </TableRow>
    </thead>
  )
}
