
export const Resultado = ({titulo, valueSlider}) => {

  return (
     <>
     
     <p className="tituloResultado"><strong>{titulo}</strong></p>
     <p className="calculoResultado"><strong>$ {valueSlider}</strong></p>
     
     </>
    )
  }