import React, { useState } from 'react';

const EmpleadoCreate = ({ createEmpleado }) => {
  const [empleado, setEmpleado] = useState({
    first_name: '',
    last_name: '',
    email: '',
    job: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmpleado({ ...empleado, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (empleado.first_name && empleado.last_name && empleado.email && empleado.job) {
      createEmpleado(empleado);  // Llama a la función para crear el empleado
      setEmpleado({ first_name: '', last_name: '', email: '', job: '' });  // Limpia el formulario
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <div>
      <h2>Crear Nuevo Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="first_name">Nombre:</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={empleado.first_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="last_name">Apellido:</label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={empleado.last_name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={empleado.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="job">Cargo:</label>
          <input
            type="text"
            id="job"
            name="job"
            value={empleado.job}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crear Empleado</button>
      </form>
    </div>
  );
};

export default EmpleadoCreate;
