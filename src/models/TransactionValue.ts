export class TransactionValue {
  private _value: number

  public constructor(value: number) {
    if (value === 0) {
      throw new Error('O valor não pode ser zero.')
    }

    if (!Number.isFinite(value)) {
      throw new Error('O valor deve ser um número finito.')
    }

    if (Number.isNaN(value)) {
      throw new Error('O valor não pode ser um número inválido.')
    }

    if (value > Number.MAX_SAFE_INTEGER) {
      throw new Error(`O valor deve ser menor que ${Number.MAX_SAFE_INTEGER}.`)
    }

    if (value < Number.MIN_SAFE_INTEGER) {
      throw new Error(`O valor deve ser maior que ${Number.MIN_SAFE_INTEGER}.`)
    }

    this._value = value
  }

  public get value() { return this._value }

}
