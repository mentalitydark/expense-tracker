import type { IFinancialTransactionRepository } from '../IFinancialTransactionRepository'

import { FinancialTransaction, type IFinancialTransaction } from '../../../models'

import { IndexedDB } from './IndexedDb'

export class FinancialTransactionIndexedDbRepository implements IFinancialTransactionRepository {
  private db: IndexedDB
  private table: string = 'financial'

  public constructor() {
    this.db = new IndexedDB('transactions', 1, [
      { name: this.table, options: { keyPath: 'id' } }
    ])
  }

  public async init() {
    try {
      await this.db.open()
    } catch (e) {
      console.error(e)
    }
  }

  public async findAll(): Promise<IFinancialTransaction[]> {
    await this.db.open()
    const data = await this.db.getAll<IFinancialTransaction['JSON']>(this.table)

    return data.sort((a, b) => Number(b.date) - Number(a.date)).map(v => new FinancialTransaction({
      id: v.id,
      description: v.description,
      value: v.value,
      date: new Date(v.date),
      visible: v.visible,
      createdAt: v.created_at ? new Date(v.created_at) : undefined,
      updatedAt: v.updated_at ? new Date(v.updated_at) : undefined,
    }))
  }

  public findById(id: IFinancialTransaction['id']): Promise<IFinancialTransaction | undefined> {
    throw new Error(id)
  }

  public async save(transaction: IFinancialTransaction): Promise<IFinancialTransaction> {
    try {
      await this.db.open()
      
      transaction.createdAt = new Date()

      await this.db.insert(this.table, transaction.JSON)
    } catch (e) {
      transaction.createdAt = undefined
      throw e
    }

    return transaction
  }

  public async update(transaction: IFinancialTransaction): Promise<IFinancialTransaction> {
    try {
      await this.db.open()
      
      transaction.updatedAt = new Date()

      await this.db.update(this.table, transaction.JSON)
    } catch (e) {
      transaction.updatedAt = undefined
      throw e
    }

    return transaction
  }

  public async delete(transaction: IFinancialTransaction): Promise<boolean> {
    try {
      await this.db.open()
      
      transaction.createdAt = new Date()

      await this.db.delete(this.table, transaction.JSON)

      return true
    } catch (e) {
      transaction.createdAt = undefined
      throw e
    }
  }
  
}
