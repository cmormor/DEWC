import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EmpleadoEdit = ({ empleados, updateEmpleado }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [empleado, setEmpleado] = useState(null);

  useEffect(() => {
    const foundEmpleado = empleados.find((emp) => emp.id === parseInt(id));
    setEmpleado(foundEmpleado);
  }, [id, empleados]);

  const handleChange = (e) => {
    setEmpleado({
      ...empleado,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmpleado(empleado);
    navigate('/');
  };

  if (!empleado) return <div>Cargando...</div>;

  return (
    <div>
      <h2>Editar Empleado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="first_name"
            value={empleado.first_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Apellido</label>
          <input
            type="text"
            name="last_name"
            value={empleado.last_name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={empleado.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Cargo</label>
          <input
            type="text"
            name="job"
            value={empleado.job}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EmpleadoEdit;
