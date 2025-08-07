interface TableDefinition {
  name: string
  options?: IDBObjectStoreParameters
}

export class IndexedDB {
  private databaseName: string
  private version: number
  private tables: TableDefinition[]
  private _db: IDBDatabase | null = null

  public constructor(name: string, version: number = 1, tables: TableDefinition[] = []) {
    this.databaseName = name
    this.version = version
    this.tables = tables
  }

  public get db(): IDBDatabase {
    if (!this._db) {
      throw new Error('Banco de dados não iniciado')
    }

    return this._db
  }

  public async open(): Promise<void> {
    if (this._db) {
      return
    }

    this._db = await new Promise((resolve, reject) => {
      const connection = indexedDB.open(this.databaseName, this.version)

      connection.onupgradeneeded = () => {
        const db = connection.result

        for (const table of this.tables) {
          if (!db.objectStoreNames.contains(table.name)) {
            db.createObjectStore(table.name, table.options)
          }
        }
      }
      connection.onsuccess = () => resolve(connection.result)
      connection.onerror = () => reject(connection.error)
    })
  }

  public async getAll<T>(tableName: string): Promise<T[]> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(tableName, 'readonly')
      const table = transaction.objectStore(tableName)
      const request = table.getAll()

      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.result)
    })
  }

  public async insert<T>(tableName: string, data: T): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(tableName, 'readwrite')
      const table = transaction.objectStore(tableName)
      const request = table.add(data)

      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.result)
    })
  }

  public async update<T extends { id: string }>(tableName: string, data: T): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(tableName, 'readwrite')
      const table = transaction.objectStore(tableName)
      const request = table.put(data)

      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.result)
    })
  }

  public async delete<T extends { id: string }>(tableName: string, data: T): Promise<void> {
    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(tableName, 'readwrite')
      const table = transaction.objectStore(tableName)
      const request = table.delete(data.id)

      request.onsuccess = () => resolve()
      request.onerror = () => reject(request.result)
    })
  }

}
