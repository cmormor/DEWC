export const Listar = ({ empleados }) => {
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
                            </tr>
                        </tbody>

                    )
                })}
            </table>
        </>

    )
}
