
export const Rango = ({titulo, creditoFijo, inicioRango, finalRango}) => {
  return (
    <> 

    <h2>{titulo}</h2>
    <p>{creditoFijo}</p>
    <input type="range" min={inicioRango} max={finalRango}></input>

    </>
  )
}
