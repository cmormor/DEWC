import { Rango } from "./Rango"
import { Titulo } from "./Titulo"

export const Cuadro = () => {
  return (
    <>
      <div className="cuadroPrincipal">
        <div className="cuadroSecundario">
          <Titulo texto={"Simulá tu crédito"} />
          <Rango titulo={'MONTO TOTAL'} creditoFijo={'$ 19.500'} inicioRango={5000} finalRango={50000}/>
        </div>
      </div>
    </>
  )
}

