import React, { useState } from 'react';

const EmpleadoSearch = ({ empleados }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredEmpleados, setFilteredEmpleados] = useState(empleados);

  // Función para manejar los cambios en el campo de búsqueda
  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterEmpleados(query);  // Filtrar empleados al cambiar el valor
  };

  // Función para filtrar empleados según el query
  const filterEmpleados = (query) => {
    if (!query) {
      setFilteredEmpleados(empleados);
    } else {
      setFilteredEmpleados(
        empleados.filter(
          (empleado) =>
            empleado.first_name.toLowerCase().includes(query.toLowerCase()) ||
            empleado.last_name.toLowerCase().includes(query.toLowerCase()) ||
            empleado.email.toLowerCase().includes(query.toLowerCase()) ||
            empleado.job.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  };

  return (
    <div>
      <h2>Buscar Empleado</h2>
      <input
        type="text"
        placeholder="Buscar por nombre, correo o cargo"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div>
        <h3>Resultados:</h3>
        {filteredEmpleados.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Cargo</th>
              </tr>
            </thead>
            <tbody>
              {filteredEmpleados.map((empleado) => (
                <tr key={empleado.id}>
                  <td>{empleado.first_name} {empleado.last_name}</td>
                  <td>{empleado.email}</td>
                  <td>{empleado.job}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No se encontraron empleados</p>
        )}
      </div>
    </div>
  );
};

export default EmpleadoSearch;
