

const servidor = {
  nombre: "Servidor Principal",
  direccionIP: "192.168.1.1",
  seguridad: {
    firewall: "activo",
    antivirus: "Kaspersky",
    cifrado: "AES-256"
  },
  sistemas: ["Linux", "Docker", "Nginx"],
  status: "operativo",
  ejecutarOperacion: function () {
    return `Ejecutando operación en ${this.nombre} con IP
 ${this.direccionIP}`;
  }
};

const copiar = (servidor) => {
  const serv = {
    nombre: servidor.nombre,
    direccionIP: servidor.direccionIP,
    seguridad: servidor.seguridad,
    sistemas: servidor.sistemas,
    status: servidor.status,
    ejecutarOperacion: function () {
      return `Ejecutando operación en ${this.nombre} con IP
 ${this.direccionIP}`;
    }
  }
  console.log(serv);
}

copiar(servidor);