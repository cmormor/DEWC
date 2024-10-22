import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import { Cuadro } from './components/Cuadro'
import './css/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cuadro />
  </StrictMode>,
)
