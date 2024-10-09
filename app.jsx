import React from 'react';

const estudiantes = [
    { nombre: "Ana", examen1: 7, examen2: 8, trabajoFinal: 9 },
    { nombre: "Juan", examen1: 4, examen2: 5, trabajoFinal: 6 },
    { nombre: "Luis", examen1: 2, examen2: 3, trabajoFinal: 4 },
    { nombre: "Carla", examen1: 9, examen2: 8, trabajoFinal: 9 },
    { nombre: "Pedro", examen1: 5, examen2: 6, trabajoFinal: 6 }
];

const convertirANumero = (valor) => {
    const numero = parseFloat(valor);
    if(numero === NaN) {
      return 0;
    } else {
      return numero;
    }
};

function ListaEstudiantesCompleta({ lista }) {
    let completa;
    return (
        <table border={1}>
            <tr>
                <th>ALUMNO</th>
                <th>NOTA 1</th>
                <th>NOTA 2</th>
                <th>NOTA 3</th>
                <th>PROMEDIO</th>
                <th>ESTADO</th>
            </tr>
            {lista.map((elem, index) => {
                const promedio = ((convertirANumero(elem.examen1) + convertirANumero(elem.examen2) + convertirANumero(elem.trabajoFinal)) / 3).toFixed(2);
                const estado = promedio >= 5 ? "Aprobado" : "Suspenso";
                return (
                    <tr key={index}>
                        <td>{elem.nombre}</td>
                        <td>{elem.examen1}</td>
                        <td>{elem.examen2}</td>
                        <td>{elem.trabajoFinal}</td>
                        <td>{promedio}</td>
                        <td>{estado}</td>
                    </tr>
                );
            })}
        </table>
    );
};

function ListaEstudiantesAprobados({ lista }) {
    let aprob;
    const aprobados = lista.filter((elem) => ((convertirANumero(elem.examen1) + convertirANumero(elem.examen2) + convertirANumero(elem.trabajoFinal)) / 3) >= 5);
    return <ListaEstudiantesCompleta lista={aprobados} />;
};

function ListaEstudiantesSuspensos({ lista }) {
    let susp;
    const suspensos = lista.filter((elem) => ((convertirANumero(elem.examen1) + convertirANumero(elem.examen2) + convertirANumero(elem.trabajoFinal)) / 3) < 5);
    return <ListaEstudiantesCompleta lista={suspensos} />;
};

let selectedOption = null;

const question = () => {
    if (selectedOption === null) { 
        if (confirm("¿Quieres mostrar la lista de todos los alumnos? Aceptar = sí / Cancelar = no")) {
            selectedOption = 1;
        } else if (confirm("¿Quieres mostrar la lista de todos los alumnos aprobados? Aceptar = sí / Cancelar = no")) {
            selectedOption = 2;
        } else if (confirm("¿Quieres mostrar la lista de todos los alumnos suspensos? Aceptar = sí / Cancelar = no")) {
            selectedOption = 3;
        } else {
            alert("Ninguna opción valida, reinicia el programa.");
            selectedOption = 0;
        }
    }

    if (selectedOption === 1) {
        return <ListaEstudiantesCompleta lista={estudiantes} />;
    } else if (selectedOption === 2) {
        return <ListaEstudiantesAprobados lista={estudiantes} />;
    } else if (selectedOption === 3) {
        return <ListaEstudiantesSuspensos lista={estudiantes} />;
    } else {
        return <h1>No se seleccionó ninguna opción válida.</h1>;
    }
};

export const App = () => {
    return question(); 
};
