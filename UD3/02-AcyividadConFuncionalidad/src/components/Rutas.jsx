import { Navigate, Route, Routes } from "react-router-dom";
import { RutaDetalles } from "./RutaDetalles";
import { App } from "./App"

export const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"/RutaObteneCuota"} />} />
      <Route path="/RutaObteneCuota" element={<App />} />
      <Route path="/RutaDetalles" element={<RutaDetalles />} />
    </Routes>
  );
};
