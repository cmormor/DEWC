import { Boton } from "./Boton";
import { Resultado } from "./Resultado";
import { SubTitulo } from "./SubTitulo";
import { Titulo } from "./Titulo";

export const RutaDetalles = () => {
  return (
    <>

      <div className="cuadroPrincipal">
        <div className="cuadroSecundario">
          <Titulo texto={"Simulá tu crédito"} />

          <SubTitulo texto={"Cuota"} />

          <div class="fondoTabla">
            <table class="tablaCuotas">
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Cuota</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Octubre - 2024</td>
                  <td>3250.00</td>
                </tr>
                <tr>
                  <td>Noviembre - 2024</td>
                  <td>3250.00</td>
                </tr>
                <tr>
                  <td>Diciembre - 2024</td>
                  <td>3250.00</td>
                </tr>
                <tr>
                  <td>Enero - 2025</td>
                  <td>3250.00</td>
                </tr>
                <tr>
                  <td>Febrero - 2025</td>
                  <td>3250.00</td>
                </tr>
                <tr>
                  <td>Marzo - 2025</td>
                  <td>3250.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="resultado">
            <Resultado titulo={"CUOTA FIJA POR MES"} valueSlider={3250.00} />
          </div>

          <div className="boton">
            <Boton texto={"VOLVER"} value="/RutaObteneCuota" style={"primero"} />
          </div>
        </div>
      </div>
    </>
  );
};
