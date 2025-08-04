import './styles/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App.tsx'
import { FinancialTransactionProvider } from './contexts'

const root = document.getElementById('root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <FinancialTransactionProvider>
        <App />
      </FinancialTransactionProvider>
    </StrictMode>
  )
}

