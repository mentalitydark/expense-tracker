import type { IFinancialTransaction } from '../../../models'
import type { IFinancialTransactionRepository } from '../IFinancialTransactionRepository'

export class FinancialTransactionMemoryRepository implements IFinancialTransactionRepository {
  private static transactions: Map<IFinancialTransaction['id'], IFinancialTransaction> = new Map()
  
  public async findAll(): Promise<IFinancialTransaction[]> {
    return Array.from(FinancialTransactionMemoryRepository.transactions.values())
  }

  public async findById(id: IFinancialTransaction['id']): Promise<IFinancialTransaction | undefined> {
    return FinancialTransactionMemoryRepository.transactions.get(id)
  }

  public async save(transaction: IFinancialTransaction): Promise<void> {
    try {
      transaction.createdAt = new Date()
      FinancialTransactionMemoryRepository.transactions.set(transaction.id, transaction)
    } catch (e) {
      transaction.createdAt = undefined
      throw e
    }
  }

  public async update(transaction: IFinancialTransaction): Promise<void> {
    try {
      transaction.updatedAt = new Date()
      FinancialTransactionMemoryRepository.transactions.set(transaction.id, transaction)
    } catch (e) {
      transaction.updatedAt = undefined
      throw e
    }
  }

  public async delete(transaction: IFinancialTransaction): Promise<boolean> {
    return FinancialTransactionMemoryRepository.transactions.delete(transaction.id)
  }

}
