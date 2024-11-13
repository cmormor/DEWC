import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const EditarEmpleado = ({ empleado, onGuardar }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        address: '',
        nafiliacionss: '',
        antiguedad: '',
        job: '',
    });

    useEffect(() => {
        setFormData({
            first_name: empleado.first_name,
            last_name: empleado.last_name,
            email: empleado.email,
            address: empleado.address,
            nafiliacionss: empleado.nafiliacionss,
            antiguedad: empleado.antiguedad,
            job: empleado.job,
        });
    }, [empleado]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleGuardar = () => {
        const empleadoEditado = { ...empleado, ...formData };
        onGuardar(empleadoEditado);
        navigate('/');
    };

    return (
        <>
            <h1>EDITAR EMPLEADO</h1>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    placeholder="Nombre"
                />
                <br />
                <label>Apellido:</label>
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    placeholder="Apellido"
                />
                <br />
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <br />
                <label>Dirección:</label>
                <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Dirección"
                />
                <br />
                <label>Número de Afiliación SS:</label>
                <input
                    type="text"
                    name="nafiliacionss"
                    value={formData.nafiliacionss}
                    onChange={handleChange}
                    placeholder="Afiliación SS"
                />
                <br />
                <label>Antigüedad:</label>
                <input
                    type="number"
                    name="antiguedad"
                    value={formData.antiguedad}
                    onChange={handleChange}
                    placeholder="Antigüedad"
                />
                <br />
                <label>Trabajo:</label>
                <input
                    type="text"
                    name="job"
                    value={formData.job}
                    onChange={handleChange}
                    placeholder="Trabajo"
                />
                <br />
                <button onClick={handleGuardar}>Guardar</button>
                <button>
                    <Link to="/">Cancelar</Link>
                </button>
            </div>
        </>
    );
};
