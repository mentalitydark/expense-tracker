import { TableRow } from './TableRow'

interface ITableHeadProps {
  columns: {name: string, colspan?: number}[]
}

export function TableHead({ columns }: ITableHeadProps) {
  return (
    <thead>
      <TableRow>
        {
          columns.map((column) => (
            <th key={`${column.name}_${column.colspan}`} colSpan={column.colspan}>{column.name}</th>
          ))
        }
      </TableRow>
    </thead>
  )
}
