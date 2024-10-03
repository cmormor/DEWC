const tienda = {
    proveedores: {},
    productos: {}
};

const nuevoProveedor = () => {
    const prov = {
        nombre: prompt("Indica el nombre: "),
        cif: +prompt("Indica el CIF: "),
        direccion: prompt("Indica la dirección: "),
        telefono: +prompt("Indica el télefono: ")
    };
    tienda.proveedores[prov.cif] = prov;
    console.log("Proveedor añadido correctamente");
};

const nuevoProducto = () => {

    const cif = prompt("Indica el CIF del proveedor:");
    if (tienda.proveedores[cif]) {
        const prod = {
            nombre: prompt("Indica el nombre del producto: "),
            id: +prompt("Indica el ID: "),
            precio: +prompt("Indica el precio: "),
            cantidad: +prompt("Indica la cantidad: "),
            proveedor: cif
        };
        tienda.productos[prod.id] = prod;
        console.log("Producto añadido correctamente");
    } else {
        console.log("El CIF indicado no existe. No se puede crear el producto.");
    }
};

const mostrarProveedores = () => {

    for (const cif in tienda.proveedores) {
        const proveedor = tienda.proveedores[cif];
        console.log(`Proveedor CIF: ${cif}, Nombre: ${proveedor.nombre}, Dirección: ${proveedor.direccion}, Teléfono: ${proveedor.telefono}`);
    }
};

const mostrarProductos = () => {

    for (const id in tienda.productos) {
        const producto = tienda.productos[id];
        console.log(`Producto ID: ${id}, Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}, Proveedor: ${producto.proveedor} `);
    }
};

const editarProveedor = cif => {

    for (const proveedor in tienda.proveedores) {

        if (cif == proveedor) {

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

            console.log(`Proveedor actualizado: ${tienda.proveedores.proveedor}`);
        } else {
            alert("Ese CIF no existe");
            return;
        }
    }
};

const editarProducto = id => {

    for (const producto in tienda.productos) {
        
        if (id == producto) {

            if (confirm("¿Quieres editar el nombre del producto? Aceptar = sí / Cancelar = no")) {
                tienda.productos[producto].nombre = prompt('Indica el nuevo nombre: ');
            }

            if (confirm("¿Quieres editar el precio del producto? Aceptar = sí / Cancelar = no")) {
                tienda.productos[producto].precio = +prompt('Indica el nuevo precio: ');
            }

            if (confirm("¿Quieres editar ela cantidad del producto? Aceptar = sí / Cancelar = no")) {
                tienda.productos[producto].cantidad = +prompt('Indica la nueva cantidad del producto: ');
            }

            console.log(`Producto actualizado: ${tienda.productos.producto}`);
        } else {
            alert("Ese ID no existe");
            return;
        }
    }

};

const eliminarProducto = id => {

    for (const producto in tienda.productos) {
        if (id == producto) {
            delete tienda.productos[id];
            console.log(`Producto con ID: ${id} ha sido eliminado`)
        } else {
            alert("Ese ID no existe");
            return;
        }
    }

};

const valorTotalProductosEnStock = id => {

    for (const producto in tienda.productos) {
        if (id == producto) {
            if (tienda.productos.producto.cantidad > 0) {
                let valorTotal = tienda.productos[id].cantidad * tienda.productos[id].precio;
                console.log(`El valor total es ${valorTotal}`);
            } else {
                console.log(`No hay stock`);
            }
        } else {
            alert("Ese ID no existe");
            return;
        }
    }

};

const copiarProducto = id => {

    for (const producto in tienda.productos) {

        if (id == producto) {

            let nombre = tienda.productos.producto.nombre;
            let precio = tienda.productos.producto.precio;
            let cantidad = tienda.productos.producto.cantidad;

            for (const proveedor in tienda.proveedores) {

                if (confirm(`¿Quieres cambiar el proveedor de la copia? Aceptar = sí / Cancelar = no`)) {

                    let cif = tienda.productos.producto.proveedor.CIF;
                    if (cif === proveedor) {
                        editarProveedor(cif);
                    }

                } else {
                    let nombreProveedor = tienda.proveedores.proveedor.nombre;
                    let cifProveedor = tienda.proveedores.proveedor.CIF;
                    let direccionProveedor = tienda.proveedores.proveedor.direccion;
                    let telefonoProveedor = tienda.proveedores.proveedor.telefono;
                }

            }
        } else {
            alert("Ese ID no existe");
            return;
        }
    }
};

const menuOpciones = () => {
    let salir = false;
    let opcion;

    while (!salir) {
        opcion = +prompt(
            "Menú de opciones:\n" +
            "1. Crear nuevo proveedor\n" +
            "2. Crear nuevo producto\n" +
            "3. Mostrar proveedores\n" +
            "4. Mostrar productos\n" +
            "5. Editar proveedor\n" +
            "6. Editar producto\n" +
            "7. Eliminar producto\n" +
            "8. Calcular el valor del stock de un producto\n" +
            "9. Copiar producto\n" +
            "10. Salir\n" +
            "Elige una opción (1-10):"
        );

        switch (opcion) {
            case 1:
                console.log("Elegiste la Opción 1: Crear nuevo proveedor");
                nuevoProveedor();
                break;
            case 2:
                console.log("Elegiste la Opción 2: Crear nuevo producto");
                nuevoProducto();
                break;
            case 3:
                console.log("Elegiste la Opción 3: Mostrar proveedores");
                mostrarProveedores();
                break;
            case 4:
                console.log("Elegiste la Opción 4: Mostrar productos");
                mostrarProductos();
                break;
            case 5:
                console.log("Elegiste la Opción 5: Editar proveedor");
                editarProveedor(+prompt("Dime el CIF del proveedor: "));
                break;
            case 6:
                console.log("Elegiste la Opción 6: Editar producto");
                editarProducto(+prompt("Dime el ID del producto: "));
                break;
            case 7:
                console.log("Elegiste la Opción 7: Eliminar producto");
                eliminarProducto(+prompt("Dime el ID del producto: "));
                break;
            case 8:
                console.log("Elegiste la Opción 8: Calcular el valor del stock de un producto");
                valorTotalProductosEnStock(+prompt("Dime el ID del producto: "));
                break;
            case 9:
                console.log("Elegiste la Opción 9: Copiar producto");
                copiarProducto(+prompt("Dime el ID del producto: "));
                break;
            case 10:
                console.log("Saliendo del menú...");
                salir = true;
                break;
            default:
                console.log("Opción no válida, por favor elige entre 1 y 10");
        }
    }
};

menuOpciones();
