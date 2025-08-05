import { ListTransactions, NewTransaction } from "./components";

export function App() {
  return (
    <>
      <header>
        <NewTransaction />
      </header>
      <div>
        <ListTransactions />
      </div>
    </>
  )
}