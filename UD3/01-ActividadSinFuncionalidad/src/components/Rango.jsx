import Slider from '@mui/joy/Slider';

export const Rango = ({ titulo, creditoFijo, inicioRango, finalRango }) => {
  return (
    <>

      <div className='rango'>
        <h2>{titulo}</h2>
        <p>{creditoFijo}</p>
        <div className=''>
          <p>{inicioRango}</p>
          <Slider
            min={inicioRango}
            max={finalRango}
            sx={{ width: '300px', margin: '0 auto' }}
          />
          <p>{finalRango}</p>
        </div>
      </div>

    </>
  )
}
