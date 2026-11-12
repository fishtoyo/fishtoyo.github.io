import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import './cases.css'
import CasesApp from './CasesApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CasesApp />
  </StrictMode>,
)
