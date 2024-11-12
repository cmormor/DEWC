import {empleados} from '../data/employees'

export const getEmpleados = ()=> {
    return empleados;
}


export const filtrarEmpleado = (id) => {
    return empleados.filter(id=>empleados.id===id)
}