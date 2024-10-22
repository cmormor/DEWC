
export const Resultado = ({titulo, calculo}) => {
    return (
     <>
     
     <p className="tituloResultado"><strong>{titulo}</strong></p>
     <p className="calculoResultado"><strong>$ {calculo}</strong></p>
     
     </>
    )
  }