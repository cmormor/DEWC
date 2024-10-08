import React from 'react';

const estudiantes = [
  { nombre: "Ana", examen1: 7, examen2: 8, trabajoFinal: 9 },
  { nombre: "Juan", examen1: 4, examen2: 5, trabajoFinal: 6 },
  { nombre: "Luis", examen1: 2, examen2: 3, trabajoFinal: 4 },
  { nombre: "Carla", examen1: 9, examen2: 8, trabajoFinal: 9 },
  { nombre: "Pedro", examen1: 5, examen2: 6, trabajoFinal: 6 }
];

function ListaEstudiantesCompleta({ lista }) {
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
        const promedio = ((elem.examen1 + elem.examen2 + elem.trabajoFinal) / 3).toFixed(2);
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
}

function ListaEstudiantesAprobados({ lista }) {
  const aprobados = lista.filter((elem) => ((elem.examen1 + elem.examen2 + elem.trabajoFinal) / 3) >= 5);
  return <ListaEstudiantesCompleta lista={aprobados} />;
}

function ListaEstudiantesSuspensos({ lista }) {
  const suspensos = lista.filter((elem) => ((elem.examen1 + elem.examen2 + elem.trabajoFinal) / 3) < 5);
  return <ListaEstudiantesCompleta lista={suspensos} />;
}
//   let salir = false;
//   let opcion;

//   while (!salir) {
//       opcion = +prompt(
//           "Menú de opciones:\n" +
//           "1. Listar a todos los alumnos\n" +
//           "2. Listar solo los alumnos aprobados\n" +
//           "3. Listar solo los alumnos suspensos\n" +
//           "4. Cancelar\n" +
//           "Elige una opción (1-3):"
//       );

//       switch (opcion) {
//           case 1:
//               console.log("Elegiste la Opción 1: Listar todos los alumnos");
//               return <ListaEstudiantesCompleta lista={estudiantes} />;

//           case 2:
//               console.log("Elegiste la Opción 2: Listar los alumnos aprobados");
//               return <ListaEstudiantesAprobados lista={estudiantes} />;

//           case 3:
//               console.log("Elegiste la Opción 3: Listar los alumnos suspensos");
//               return <ListaEstudiantesSuspensos lista={estudiantes} />;

//           case 4:
//             console.log("Cancelación completada")
//             salir = true;
//             break;

//           default:
//               console.log("Opción no válida, por favor elige entre 1 y 3");
//       }
//   }
// };

// const menuOpciones = () => {
//   let opcion;
//   opcion = +prompt(
//     "Menú de opciones:\n" +
//     "1. Listar a todos los alumnos\n" +
//     "2. Listar solo los alumnos aprobados\n" +
//     "3. Listar solo los alumnos suspensos\n" +
//     "4. Cancelar\n" +
//     "Elige una opción (1-3):"
//   );

//   if ( opcion === 1 ) {
//     return <ListaEstudiantesCompleta lista={estudiantes} />;
//   } else if ( opcion === 2 ) {
//     return <ListaEstudiantesAprobados lista={estudiantes} />;
//   } else if ( opcion === 3 ) {
//     return <ListaEstudiantesSuspensos lista={estudiantes} />;
//   } else if (  opcion ===4 ) {
//     alert("Cancelado");
//   } else {
//     alert("Opción no válida");
//   }

// }

export const App = () => {
  return <ListaEstudiantesCompleta lista={estudiantes} />;
  //return <ListaEstudiantesAprobados lista={estudiantes} />;
  //return <ListaEstudiantesSuspensos lista={estudiantes} />;
};
