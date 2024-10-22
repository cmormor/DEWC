import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Rango } from './components/Rango'
import { Resultado } from './components/Resultado'
import { Boton } from './components/Boton'
import { Cuadro } from './components/Cuadro'
import './css/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cuadro />
    {/* <Rango titulo={'MONTO TOTAL'} creditoFijo={'$ 19.500'} inicioRango={5000} finalRango={50000}/>
    <Rango titulo={'PLAZO'} creditoFijo={'16'} inicioRango={3} finalRango={24}/>
    <Resultado />
    <Boton nombre={"OBTENÉ CRÉDITO"} />
    <Boton nombre={"VER DETALLES DE CUOTAS"} /> */}
  </StrictMode>,
)
