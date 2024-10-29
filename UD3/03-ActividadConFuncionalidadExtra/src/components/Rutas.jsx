import { Navigate, Route, Routes } from "react-router-dom";
import { RutaDetalles } from "./RutaDetalles";
import { RutaObteneCuota } from "./RutaObteneCuota";

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/RutaObteneCuota"} />} />
      <Route path="/RutaObteneCuota" element={<RutaObteneCuota />} />
      <Route path="/RutaDetalles" element={<RutaDetalles />} />
    </Routes>
  );
};