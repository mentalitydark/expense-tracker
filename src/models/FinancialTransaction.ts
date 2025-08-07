import { FinancialTransactionType } from '../enums'

import { TransactionValue } from './TransactionValue'

export interface IFinancialTransaction {
  id: string
  description: string
  value: number
  date: Date
  type: FinancialTransactionType
  visible: boolean
  createdAt?: Date
  updatedAt?: Date
  JSON: {
    id: string
    description: string
    value: number
    date: number
    type: FinancialTransactionType
    visible: boolean
    created_at?: number
    updated_at?: number
  }
}

interface IFinancialTransactionProps {
  id?: string
  description: string
  value: number
  date?: Date
  visible?: boolean
  createdAt?: Date
  updatedAt?: Date
}

export class FinancialTransaction implements IFinancialTransaction {
  private _id: string
  private _description: string
  private _value: TransactionValue
  private _date: Date
  private _type: FinancialTransactionType
  private _visible: boolean = true
  private _createdAt?: Date
  private _updatedAt?: Date

  public constructor({ id, description, value, date, visible = true, createdAt, updatedAt }: IFinancialTransactionProps) {
    this._id = id ?? crypto.randomUUID()
    this._description = description
    this._value = new TransactionValue(value)
    this._date = date ?? new Date()
    this._type = value < 0 ? FinancialTransactionType.EXPENSES : FinancialTransactionType.REVENUE

    this._visible = visible
    this._createdAt = createdAt
    this._updatedAt = updatedAt
  }

  public get id() { return this._id }
  public get description() { return this._description }
  public get value() { return this._value.value }
  public get date() { return this._date }
  public get type() { return this._type }
  public get visible() { return this._visible }
  public get createdAt() { return this._createdAt }
  public get updatedAt() { return this._updatedAt }
  public get JSON() {
    return {
      id: this.id,
      description: this.description,
      value: this.value,
      date: this.date.getTime(),
      type: this.type,
      visible: this.visible,
      created_at: this.createdAt?.getTime(),
      updated_at: this.updatedAt?.getTime(),
    }
  }

  public set id(value: string) { this._id = value }
  public set description(value: string) { this._description = value }
  public set value(value: number) {
    this._value = new TransactionValue(value)
    this._type = value < 0 ? FinancialTransactionType.EXPENSES : FinancialTransactionType.REVENUE
  }
  public set date(value: Date) { this._date = value }
  public set visible(value: boolean) { this._visible = value }
  public set createdAt(value: Date | undefined) { this._createdAt = value }
  public set updatedAt(value: Date | undefined) { this._updatedAt = value }

}
