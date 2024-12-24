import { createRoot } from 'react-dom/client'
import { Home } from './pages/Home.tsx'
import '@styles/main.scss'

createRoot(document.getElementById('root') as HTMLElement).render(
  <Home />
)
