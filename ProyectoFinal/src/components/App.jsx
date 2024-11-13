import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { arrayEmpleados } from '../data/empleados';
import { ListarEmpleado } from './ListarEmpleado';
import { EditarEmpleado } from './EditarEmpleado';

export const App = () => {
    const [empleados, setEmpleados] = useState(arrayEmpleados);
    const [empleadoEnEdicion, setEmpleadoEnEdicion] = useState(null);

    const seleccionarEmpleadoParaEdicion = (empleado) => {
        setEmpleadoEnEdicion(empleado);
    };

    const guardarEmpleadoEditado = (empleadoEditado) => {
        setEmpleados(
            empleados.map((empleado) =>
                empleado.id === empleadoEditado.id ? empleadoEditado : empleado
            )
        );
    };

    useEffect(() => {
        setEmpleados(arrayEmpleados);
    }, []);

    return (
        <Router>
            <h1>Gestión de Empleados TechSolutions!</h1>
            <nav>
                <button>
                    <Link to="/buscar">Buscar Empleados</Link>
                </button>
                <button>
                    <Link to="/crear">Añadir Empleado</Link>
                </button>
            </nav>
            <Routes>
                <Route
                    path="/"
                    element={<ListarEmpleado empleados={empleados} onEditar={seleccionarEmpleadoParaEdicion} />}
                />
                <Route
                    path="/editar"
                    element={
                        <EditarEmpleado
                            empleado={empleadoEnEdicion}
                            onGuardar={guardarEmpleadoEditado}
                        />
                    }
                />
            </Routes>
        </Router>
    );
};
