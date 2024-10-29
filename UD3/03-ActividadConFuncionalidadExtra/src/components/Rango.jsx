import Slider from '@mui/joy/Slider';


export const Rango = ({ titulo, inicioRango, finalRango, valueSlider, cambiarSlider }) => {

  const onChangeSlider = (e) => {    
    cambiarSlider(e.target.value);
  }
  
  return (
    <>

      <div className='rango'>
        <p className='tituloRango'>{titulo}</p>
        <p className='creditoFijo'><strong>{valueSlider}</strong></p>
      </div>

      <div className='slider'>
          <Slider
            min={inicioRango}
            max={finalRango}
            sx={{ width: '65%'}}
            onChange={onChangeSlider}
            value={valueSlider}
          />
          <p>{inicioRango}</p>
          <p>{finalRango}</p>
        </div>

    </>
  )
}