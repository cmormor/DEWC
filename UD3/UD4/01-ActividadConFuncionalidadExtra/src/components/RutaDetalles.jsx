import { Boton } from "./Boton";
import { Resultado } from "./Resultado";
import { SubTitulo } from "./Subtitulo";
import { Titulo } from "./Titulo";

export const RutaDetalles = ({valueResultado}) => {
  return (
    <>

      <div className="cuadroPrincipal">
        <div className="cuadroSecundario">
          <Titulo texto={"Simulá tu crédito"} />

          <SubTitulo texto={"Cuota"} />

          <div className="fondoTabla">
            <table className="tablaCuotas">
              <thead>
                <tr>
                  <th>Mes</th>
                  <th>Cuota</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Octubre - 2024</td>
                  <td>{valueResultado}</td>
                </tr>
                <tr>
                  <td>Noviembre - 2024</td>
                  <td>{valueResultado}</td>
                </tr>
                <tr>
                  <td>Diciembre - 2024</td>
                  <td>{valueResultado}</td>
                </tr>
                <tr>
                  <td>Enero - 2025</td>
                  <td>{valueResultado}</td>
                </tr>
                <tr>
                  <td>Febrero - 2025</td>
                  <td>{valueResultado}</td>
                </tr>
                <tr>
                  <td>Marzo - 2025</td>
                  <td>{valueResultado}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="resultado">
          <Resultado titulo={"CUOTA FIJA POR MES"} valueSlider={valueResultado} />
        </div>

          <div className="boton">
            <Boton texto={"OBTENÉ CRÉDITO"} value="/RutaObteneCuota" style={"primero"} />
            <Boton texto={"VER DETALLE DE CUOTAS"} value="/RutaDetalles" style={"segundo"} />
          </div>
        </div>
      </div>
    </>
  );
};