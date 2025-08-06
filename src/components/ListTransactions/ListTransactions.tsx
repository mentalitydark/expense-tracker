import { NewTransaction } from '../NewTransaction'
import Table from '../Table'

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
    onClickCheckbox,
    removeTransactionsSelected,
    changeVisibilityTransactionsSelected
  } = useListTransactions()

  return (
    <div className='list-transactions'>
      <div className='actions'>
        <NewTransaction />
        <button onClick={removeTransactionsSelected}><i className='fa-solid fa-trash' /></button>
        <button onClick={changeVisibilityTransactionsSelected}><i className='fa-solid fa-eye-slash' /></button>
      </div>
      <Table.Root>
        <Table.Head columns={[
          { name: '' },
          { name: 'Descrição' },
          { name: 'Data' },
          { name: 'Valor' }
        ]} />
        <Table.Body>
          {
            data.map(transaction => (
              <Table.Row key={transaction.id} visible={!transaction.visible}>
                <Table.Cell align='center'><input id={transaction.id} type='checkbox' onChange={(event) => onClickCheckbox(event)}/></Table.Cell>
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
