import React from 'react';
import { Link } from 'react-router-dom';

const EmpleadoList = ({ empleados }) => {
  return (
    <div>
      <h2>Lista de Empleados</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            <th>Cargo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado) => (
            <tr key={empleado.id}>
              <td>{empleado.first_name} {empleado.last_name}</td>
              <td>{empleado.email}</td>
              <td>{empleado.job}</td>
              <td>
                <Link to={`/editar/${empleado.id}`}>Editar</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmpleadoList;
