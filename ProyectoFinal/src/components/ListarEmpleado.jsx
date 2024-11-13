import { Link } from "react-router-dom"

export const ListarEmpleado = ({ empleados }) => {
    return (
        <>
            <h2>LISTA DE EMPLEADOS</h2>
            <table border={1}>
                <thead>
                    <tr>
                        <th>NOMBRE</th>
                        <th>APELLIDO</th>
                        <th>EMAIL</th>
                        <th>DIRECCION</th>
                        <th>AFILIACIONES</th>
                        <th>ANTIGÜEDAD</th>
                        <th>TRABAJO</th>
                        <th>OPCIÓN</th>
                    </tr>
                </thead>
                {empleados.map(empleado => {
                    return (

                        <tbody>
                            <tr>
                                <td>{empleado.first_name}</td>
                                <td>{empleado.last_name}</td>
                                <td>{empleado.email}</td>
                                <td>{empleado.address}</td>
                                <td>{empleado.nafiliacionss}</td>
                                <td>{empleado.antiguedad}</td>
                                <td>{empleado.job}</td>
                                <td>
                                    <button>
                                        <Link to="/editar" onClick={() => onEditar(empleado)}>EDITAR</Link>
                                    </button>
                                </td>
                            </tr>
                        </tbody>

                    )
                })}
            </table>
        </>

    )
}