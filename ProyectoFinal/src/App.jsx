import React, { useEffect, useState } from 'react'
import { filtrarEmpleado, getEmpleados } from './services/employeesService';
import { Listar } from './components/Listar';

export const App = () => {

  //Estados
  const [empleados,setEmpleados] = useState([]);



  //Efectos
  useEffect(
    ()=>{
      setEmpleados(getEmpleados());
    },
    []
  );

  //Manejador

  // const handlerBuscar = () => {
  //   setEmpleados(filtrarEmpleado());
  // }


  return (
    <>
    <Listar empleados={empleados}/>
    </>
  )
}

