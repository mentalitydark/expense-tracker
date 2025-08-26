import Table from '../Table'

import { ChangeVisibility, NewTransaction, RemoveTransactions } from './Operations'
import { useListTransactions } from './useListTransactions'

function formatNumber(value: number): string {
  return value.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    minimumIntegerDigits: 1,
    maximumFractionDigits: 2
  })
}

function formatDate(value: Date): string {
  return value.toLocaleDateString('pt-br')
}

export function ListTransactions() {
  const {
    data,
    onSelectOne,
    allSelected,
    onSelectAll,
    selectedIds
  } = useListTransactions()

  return (
    <div className='list-transactions'>
      <div className='actions'>
        <NewTransaction />
        <RemoveTransactions />
        <ChangeVisibility />
      </div>
      <Table.Root>
        <Table.Head columns={[
            { name: <input type='checkbox' checked={allSelected} onChange={e => onSelectAll(e.target.checked)} /> },
            { name: 'Descrição' },
            { name: 'Data' },
            { name: 'Valor' }
        ]} />
        <Table.Body>
          {
            data.map(transaction => (
              <Table.Row key={transaction.id} visible={!transaction.visible}>
                <Table.Cell align='center'>
                  <input
                    id={transaction.id}
                    type='checkbox'
                    onChange={onSelectOne}
                    checked={selectedIds.includes(transaction.id)}
                  />
                </Table.Cell>
                <Table.Cell>{transaction.description}</Table.Cell>
                <Table.Cell align='center'>{formatDate(transaction.date)}</Table.Cell>
                <Table.Cell align='right' negative={transaction.value < 0}>{formatNumber(transaction.value)}</Table.Cell>
              </Table.Row>
            ))
          }
        </Table.Body>
        <Table.Foot>
          <Table.Row>
            <Table.Cell width={40} />
            <Table.Cell align='right' width={300}>Total</Table.Cell>
            <Table.Cell width={101} />
            <Table.Cell align='right' width={150}>{formatNumber(data.filter(t => t.visible).reduce((prev, cur) => prev + cur.value, 0.00))}</Table.Cell>
          </Table.Row>
        </Table.Foot>
      </Table.Root>
    </div>
  )
}
