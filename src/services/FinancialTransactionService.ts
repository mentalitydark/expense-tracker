import type { IFinancialTransaction } from '../models'
import type { IFinancialTransactionRepository } from '../repositories'

export class FinancialTransactionService {
  public constructor(private repository: IFinancialTransactionRepository) {}

  public async getAll(): Promise<IFinancialTransaction[]> {
    return this.repository.findAll()
  }

  public async getById(id: string): Promise<IFinancialTransaction | undefined> {
    return this.repository.findById(id)
  }

  public async add(transaction: IFinancialTransaction): Promise<IFinancialTransaction> {
    return await this.repository.save(transaction)
  }

  public async update(transaction: IFinancialTransaction): Promise<IFinancialTransaction> {
    return await this.repository.update(transaction)
  }

  public async remove(transaction: IFinancialTransaction): Promise<boolean> {
    return this.repository.delete(transaction)
  }
}
