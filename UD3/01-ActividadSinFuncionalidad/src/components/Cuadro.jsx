
import { Boton } from "./Boton"
import { Rango } from "./Rango"
import { Resultado } from "./Resultado"
import { Titulo } from "./Titulo"


export const Cuadro = () => {
  return (
    <>
      <div className="cuadroPrincipal">

        <div className="cuadroSecundario">

          <Titulo texto={"Simulá tu crédito"} />
          <Rango titulo={'MONTO TOTAL'} creditoFijo={'$ 19.500'} inicioRango={5000} finalRango={50000}/>
          <Rango titulo={'PLAZO'} creditoFijo={'16'} inicioRango={3} finalRango={24}/>
          
          <div className="resultado"> 
            <Resultado titulo={'CUOTA FIJA POR MES'} calculo={'2,412.91'}/>
          </div>

          <div className="boton">
          <Boton texto={'OBTENÉ CRÉDITO'} style={'primero'}/>
          <Boton texto={'VER DETALLE DE CUOTAS'} style={'segundo'}/>
          </div>

        </div>

      </div>
    </>
  )
}

