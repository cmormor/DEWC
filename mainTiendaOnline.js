const proveedor = (nombre, CIF, direccion, telefono) => {
    return ({
        nombre,
        CIF,
        direccion,
        telefono
    })
};

const producto = (nombre, precio, cantidad, proveedor) => {
    return ({
        nombre,
        precio,
        cantidad,
        proveedor
    })
};

const editarProducto = prod => {

    if (confirm("¿Quieres editar el nombre? Aceptar = sí / Cancelar = no")) {
        let nombre = prompt("Nombre: ");
        prod.nombre = nombre;
    }

    if (confirm("¿Quieres editar el precio? Aceptar = sí / Cancelar = no")) {
        let precio = +prompt("Precio: ");
        prod.precio = precio;
    }

    if (confirm("¿Quieres editar la cantidad? Aceptar = sí / Cancelar = no")) {
        let cantidad = +prompt("Cantidad: ");
        prod.cantidad = cantidad;
    }

    console.log(prod);

};

const eliminarProducto = prod => drop(prod);

const editaProveedor = prov => {
    
    if (confirm("¿Quieres editar el nombre del proveedor? Aceptar = sí / Cancelar = no")) {
        let nombreProveedor = prompt("Nombre Proveedor: ");
        prov.nombre = nombreProveedor;
    }

    if (confirm("¿Quieres editar el CIF del proveedor? Aceptar = sí / Cancelar = no")) {
        let cifProveedor = +prompt("CIF Proveedor: ");
        prov.CIF = cifProveedor;
    }

    if (confirm("¿Quieres editar la dirección del proveedor? Aceptar = sí / Cancelar = no")) {
        let direccionProveedor = prompt("Dirección Proveedor: ");
        prov.direccion = direccionProveedor;
    }

    console.log(prov);

};