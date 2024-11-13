import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { arrayEmpleados } from '../data/empleados';
import EmpleadoList from './EmpleadoList';
import EmpleadoSearch from './EmpleadoSearch';
import EmpleadoEdit from './EmpleadoEdit';
import EmpleadoCreate from './EmpleadoCreate';

function App() {
  const [empleados, setEmpleados] = useState(arrayEmpleados);

  const updateEmpleado = (updatedEmpleado) => {
    setEmpleados((prevEmpleados) =>
      prevEmpleados.map((empleado) =>
        empleado.id === updatedEmpleado.id ? updatedEmpleado : empleado
      )
    );
  };

  // Función para crear un nuevo empleado
  const createEmpleado = (nuevoEmpleado) => {
    const nuevoId = empleados.length + 1;
    const empleadoConId = { ...nuevoEmpleado, id: nuevoId };
    setEmpleados([...empleados, empleadoConId]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Gestión de Empleados</h1>
        <nav>
          <Link to="/">Lista de Empleados</Link> | 
          <Link to="/buscar">Buscar Empleado</Link> | 
          <Link to="/crear">Crear Nuevo Empleado</Link>
        </nav>
        <Routes>
          <Route path="/" element={<EmpleadoList empleados={empleados} />} />
          <Route path="/buscar" element={<EmpleadoSearch empleados={empleados} />} />
          <Route path="/editar/:id" element={<EmpleadoEdit empleados={empleados} updateEmpleado={updateEmpleado} />} />
          <Route path="/crear" element={<EmpleadoCreate createEmpleado={createEmpleado} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
