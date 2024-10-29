import { Boton } from "./Boton";
import { Rango } from "./Rango";
import { Resultado } from "./Resultado";
import { Titulo } from "./Titulo";

export const RutaObteneCuota = ({
  valueSliderMonto,
  setValueSliderMonto,
  valueSliderPlazo,
  setValueSliderPlazo,
  valueResultado
}) => {
  return (
    <div className="cuadroPrincipal">
      <div className="cuadroSecundario">
        <Titulo texto={"Simulá tu crédito"} />
        
        <Rango
          titulo={"MONTO TOTAL"}
          inicioRango={5000}
          finalRango={50000}
          valueSlider={valueSliderMonto}
          cambiarSlider={setValueSliderMonto}
        />
        <Rango
          titulo={"PLAZO"}
          inicioRango={3}
          finalRango={24}
          valueSlider={valueSliderPlazo}
          cambiarSlider={setValueSliderPlazo}
        />

        <div className="resultado">
          <Resultado titulo={"CUOTA FIJA POR MES"} valueSlider={valueResultado} />
        </div>

        <div className="boton">
        <Boton texto={"OBTENÉ CRÉDITO"} value="/RutaObteneCuota" style={"primero"} />
        <Boton texto={"VER DETALLE DE CUOTAS"} value="/RutaDetalles" style={"segundo"} />
        </div>
      </div>
    </div>
  );
};
