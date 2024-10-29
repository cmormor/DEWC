import { Navigate, Route, Routes } from "react-router-dom";
import { RutaDetalles } from "./RutaDetalles";
import { RutaObteneCuota } from "./RutaObteneCuota";

export const Rutas = ({
  valueSliderMonto,
  setValueSliderMonto,
  valueSliderPlazo,
  setValueSliderPlazo,
  valueResultado
}) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/RutaObteneCuota"} />} />
      <Route
        path="/RutaObteneCuota"
        element={
          <RutaObteneCuota
            valueSliderMonto={valueSliderMonto}
            setValueSliderMonto={setValueSliderMonto}
            valueSliderPlazo={valueSliderPlazo}
            setValueSliderPlazo={setValueSliderPlazo}
            valueResultado={valueResultado}
          />
        }
      />
      <Route
        path="/RutaDetalles"
        element={
          <RutaDetalles
            valueResultado={valueResultado} />} />
    </Routes>
  );
};
