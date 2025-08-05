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

export function ListTransactions() {
  const { data } = useListTransactions()

  return (
    <table className='list-transactions' cellSpacing={0}>
      <thead>
        <th>Descrição</th>
        <th>Valor</th>
      </thead>
      <tbody>
        {
          data.map((transaction) => (
            <tr>
              <td className='description'>{transaction.description}</td>
              <td className='value'>{formatNumber(transaction.value)}</td>
            </tr>
          ))
        }
      </tbody>
      <tfoot>
        <tr>
          <td className='description'>Totais</td>
          <td className='value'>
            {
              formatNumber(data.reduce((prev, cur) => prev + cur.value, 0.00))
            }
          </td>
        </tr>
      </tfoot>
    </table>
  )
}
