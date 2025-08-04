export interface IFinancialTransaction {
  id: string
  description: string
  value: number
  date: Date
  createdAt?: Date
  updatedAt?: Date
}

interface IFinancialTransactionProps {
  id?: string
  description: string
  value: number
  date?: Date
}

export class FinancialTransaction implements IFinancialTransaction {
  private _id: string
  private _description: string
  private _value: number
  private _date: Date
  private _createdAt?: Date
  private _updatedAt?: Date

  public constructor({ id, description, value, date }: IFinancialTransactionProps) {
    this._id = id ?? crypto.randomUUID()
    this._description = description
    this._value = value
    this._date = date ?? new Date()

    if (this._value === 0) {
      throw new Error('Valor precisa ser diferente de zero.')
    }
  }

  public get id() { return this._id }
  public get description() { return this._description }
  public get value() { return this._value }
  public get date() { return this._date }
  public get createdAt() { return this._createdAt }
  public get updatedAt() { return this._updatedAt }

  public set id(value: string) { this._id = value }
  public set description(value: string) { this._description = value }
  public set value(value: number) { this._value = value }
  public set date(value: Date) { this._date = value }
  public set createdAt(value: Date | undefined) { this._createdAt = value }
  public set updatedAt(value: Date | undefined) { this._updatedAt = value }

}
