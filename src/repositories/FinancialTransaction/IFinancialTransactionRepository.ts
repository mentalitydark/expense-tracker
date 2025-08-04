import type { IFinancialTransaction } from '../../models'

export interface IFinancialTransactionRepository {
  findAll(): Promise<IFinancialTransaction[]>
  findById(id: IFinancialTransaction['id']): Promise<IFinancialTransaction | undefined>
  save(transaction: IFinancialTransaction): Promise<void>
  update(transaction: IFinancialTransaction): Promise<void>
  delete(transaction: IFinancialTransaction): Promise<boolean>
}
