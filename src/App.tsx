import { ListTransactions } from "./components";
import { SelectTransactionsProvider } from "./contexts";

export function App() {
  return (
    <>
      <header>
        <h1>Controle de Gastos</h1>
      </header>
      <div>
        <SelectTransactionsProvider>
          <ListTransactions />
        </SelectTransactionsProvider>
      </div>
    </>
  )
}