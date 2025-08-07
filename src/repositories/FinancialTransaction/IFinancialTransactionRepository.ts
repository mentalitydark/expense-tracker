import type { IFinancialTransaction } from '../../models'

export interface IFinancialTransactionRepository {
  init(): void
  findAll(): Promise<IFinancialTransaction[]>
  findById(id: IFinancialTransaction['id']): Promise<IFinancialTransaction | undefined>
  save(transaction: IFinancialTransaction): Promise<IFinancialTransaction>
  update(transaction: IFinancialTransaction): Promise<IFinancialTransaction>
  delete(transaction: IFinancialTransaction): Promise<boolean>
}
