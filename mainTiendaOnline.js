const tienda = (proveedor, producto) => {
    return {
        proveedores: {},
        productos: {}
    }
};

const nuevoProveedor = () => {
    const prov = {
        nombre: prompt("Indica el nombre: "),
        cif: prompt("Indica el CIF: "),
        direccion: prompt("Indica el dirección: "),
        telefono: prompt("Indica el télefono: ")
    };
    tienda.proveedores[prov.cif] = prov;
}

const editarProveedor = cif => {

    for (const proveedor in tienda.proveedores) {

        if (cif === proveedor) {

            if (confirm("¿Quieres editar el nombre del proveedor? Aceptar = sí / Cancelar = no")) {
                tienda.proveedores[proveedor].nombre = prompt('Indica el nuevo nombre: ');
            }

            if (confirm("¿Quieres editar el CIF del proveedor? Aceptar = sí / Cancelar = no")) {
                
                let cif = +prompt('Indica el nuevo CIF: ');
                
                for (const proveedor in tienda.proveedores) {
                    
                    if (cif === proveedor) {
                        alert("Error ese CIF ya existe");
                    } else {
                        tienda.proveedores[proveedor].cif = +prompt('Indica el nuevo CIF: ');
                    }
                };

            }

            if (confirm("¿Quieres editar la dirección del proveedor? Aceptar = sí / Cancelar = no")) {
                tienda.proveedores[proveedor].direccion = prompt('Indica la nueva dirección: ');
            }

            if (confirm("¿Quieres editar el télefono del proveedor? Aceptar = sí / Cancelar = no")) {
                tienda.proveedores[proveedor].telefono = +prompt('Indica el nuevo télefono: ');
            }

        }
        return;
    }


    console.log(`Proveedor actualizado: ${tienda.proveedor}`);

};

const editarProducto = tienda => {

    if (confirm("¿Quieres editar el nombre? Aceptar = sí / Cancelar = no")) {
        tienda.producto.nombre = prompt("Nombre: ");;
    }

    if (confirm("¿Quieres editar el precio? Aceptar = sí / Cancelar = no")) {
        tienda.producto.precio = +prompt("Precio: ");;
    }

    if (confirm("¿Quieres editar la cantidad? Aceptar = sí / Cancelar = no")) {
        tienda.producto.cantidad = +prompt("Cantidad: ");;
    }

    if (confirm("¿Quieres editar el proveedor? Aceptar = sí / Cancelar = no")) {
        editarProveedor(tienda.producto);
    }

    console.log(`Producto actualizado: ${prod}`);

};

const eliminarProducto = tienda => {
    delete tienda.producto;
}

const valorTotalProductosEnStock = (prod) => {

    if (prod.cantidad > 0) {
        let valorTotal = prod.cantidad * prod.precio;
        console.log(`El valor total es ${valorTotal}`);
    } else {
        console.log(`No hay stock`);
    }

};

const copiarProducto = (prod) => {

    let nombre = prod.nombre;
    let precio = prod.precio;
    let cantidad = prod.cantidad;

    if (confirm(`¿Quieres cambiar el proveedor de la copia? Aceptar = sí / Cancelar = no`)) {
        prod.proveedor.nombre = prompt("Nombre Proveedor: ");
        prod.CIF = +prompt("CIF Proveedor: ");
        prod.direccion = prompt("Direeción Proveedor: ");
        prod.telefono = +prompt("Télefono Proveedor:");
    } else {
        let nombreProveedor = prod.proveedor.nombre;
        let cifProveedor = prod.proveedor.CIF;
        let direccionProveedor = prod.proveedor.direccion;
        let telefonoProveedor = prod.proveedor.telefono;
    }


};
