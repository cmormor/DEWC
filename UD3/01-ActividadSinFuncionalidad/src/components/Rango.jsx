import Slider from '@mui/joy/Slider';

export const Rango = ({ titulo, creditoFijo, inicioRango, finalRango }) => {
  return (
    <>

      <div className='rango'>
        <p className='tituloRango'>{titulo}</p>
        <p className='creditoFijo'><strong>{creditoFijo}</strong></p>
      </div>

      <div className='slider'>
          <Slider
            min={inicioRango}
            max={finalRango}
            sx={{ width: '65%'}}
          />
          <p>{inicioRango}</p>
          <p>{finalRango}</p>
        </div>

    </>
  )
}