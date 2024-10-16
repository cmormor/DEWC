const vulnerabilidades = [
  { nombre: "SQL Injection", gravedad: "alta", estado: "pendiente", sistema: "CRM" },
  { nombre: "XSS", gravedad: "media", estado: "mitigada", sistema: "Portal Web" },
  { nombre: "CSRF", gravedad: "media", estado: "pendiente", sistema: "Portal Web" },
  { nombre: "Buffer Overflow", gravedad: "alta", estado: "pendiente", sistema: "Servidor de Correo" },
  { nombre: "Inyección de Comandos", gravedad: "alta", estado: "mitigada", sistema: "CRM" },
  { nombre: "Fuerza Bruta", gravedad: "baja", estado: "pendiente", sistema: "VPN" },
  { nombre: "Snooping", gravedad: "baja", estado: "mitigada", sistema: "Red Interna" },
];

const incidentes = {
  cliente1: {
    id: 1,
    vulnerabilidades: [
      { nombre: "SQL Injection", gravedad: "alta", estado: "pendiente", sistema: "CRM" },
      { nombre: "CSRF", gravedad: "media", estado: "pendiente", sistema: "Portal Web" },
      { nombre: "Snooping", gravedad: "baja", estado: "mitigada", sistema: "Red Interna" },
    ]
  },
};

const altaGravedad = vulnerabilidades.filter(elem => {
  if (elem.gravedad === "alta") {
    return elem.gravedad;
  }
});

console.log(altaGravedad);

const calaculaIncidentes = (id) => {

  if (incidentes.cliente1.id === id) {

    let suma = 0;

    for (let i = 0; i < incidentes.cliente1.vulnerabilidades.length; i++) {

      if (incidentes.cliente1.vulnerabilidades[i].gravedad === "baja") {
        suma = suma + 1;
      }

      if (incidentes.cliente1.vulnerabilidades[i].gravedad === "media") {
        suma = suma + 2;
      }

      if (incidentes.cliente1.vulnerabilidades[i].gravedad === "alta") {
        suma = suma + 3;
      }
    }
    console.log(suma);
  }

};

calaculaIncidentes(1);