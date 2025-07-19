let nombreProductoVendido = ["Manzana", "Pera", "Zapote", "Uva", "Melon"]
let cantidadDisponible = [10, 10, 10, 10, 10]
let cantidadVendida = [0, 0, 0, 0, 0]
let promocion = [true, false, true, false, true]
let totalUnidadesVendidas = 0

//FUNCIONES

//1. Mostrar todos los productos vendidos, su cantidad y si estaban en promoción.
function mostrarProductosVendidos() {
    let mensaje = "Productos vendidos:\n\n";
    for (let i = 0; i < nombreProductoVendido.length; i++) {
        let cantidad = parseInt(cantidadVendida[i]);
        if (cantidad > 0) {
            let promo = promocion[i] ? "Tenía Promoción" : "No tenía Promoción";
            mensaje += "Producto: " + nombreProductoVendido[i] +
                " / Cantidad: " + cantidad +
                " / Promoción: " + promo + "\n";
        }
    }
    alert(mensaje);
}
//2. Calcular cuántos productos estaban en promoción y cuántos no.
function calcularProductosEnPromocion() {
    let productosEnPromocion = 0
    let productosNoEnPromocion = 0
    for (let i = 0; i < nombreProductoVendido.length; i++) {
        if (promocion[i]) {
            productosEnPromocion++
        } else {
            productosNoEnPromocion++
        }
    }
    alert("Productos en promocion: " + productosEnPromocion + "\n" + "Productos sin promocion: " + productosNoEnPromocion)
}
//3. Calcular el total de unidades vendidas únicamente de los productos en promoción.
function calcularTotalUnidadesVendidas() {
    let totalUnidadesVendidas = 0;
    for (let i = 0; i < nombreProductoVendido.length; i++) {
        if (promocion[i]) {
            totalUnidadesVendidas += parseInt(cantidadVendida[i]);
        }
    }
    alert("Total de unidades vendidas con promoción: " + totalUnidadesVendidas);
}
//4. Calcular el promedio general de unidades vendidas por producto.
function calcularPromedioGeneral() {
    let totalUnidades = 0;
    for (let i = 0; i < nombreProductoVendido.length; i++) {
        totalUnidades += parseInt(cantidadVendida[i]);
    }
    let promedioGeneral = totalUnidades / nombreProductoVendido.length;
    alert("Promedio general de unidades vendidas por producto: " + promedioGeneral);
}
//5. Identificar el primer producto vendido que no estaba en promoción.
function identificarPrimerProductoVendido() {
    let primerProductoVendido = ""
    for (let i = 0; i < nombreProductoVendido.length; i++) {
        if (!promocion[i]) {
            primerProductoVendido = nombreProductoVendido[i]
            break
        }
    }
    alert("El primer producto vendido que no estaba en promoción es: " + primerProductoVendido)
}
//6. Generar un listado con solo los nombres de los productos que sí estaban en promoción.
function generarListadoProductosEnPromocion() {
    let listadoProductosEnPromocion = []
    for (let i = 0; i < nombreProductoVendido.length; i++) {
        if (promocion[i]) {
            listadoProductosEnPromocion.push(nombreProductoVendido[i])
        }
    }
    alert("Listado de productos en promoción: " + listadoProductosEnPromocion)
}
//7. Aumentar en 5 unidades las cantidades de los productos no promocionados.
function aumentarCantidadesProductosNoPromocionados() {
    for (let i = 0; i < nombreProductoVendido.length; i++) {
        if (!promocion[i]) {
            cantidadDisponible[i] += 5
        }
    }
}
//8. Mostrar el nuevo listado actualizado con las cantidades ajustadas.
function mostrarNuevoListado() {
    let nuevoListadoActualizado = prompt("Listado Actualizado:" +
        "\n" + "Productos     /   cantidad" +
        "\n" + "1. " + nombreProductoVendido[0] + "         " + cantidadDisponible[0] +
        "\n" + "2. " + nombreProductoVendido[1] + "                 " + cantidadDisponible[1] +
        "\n" + "3. " + nombreProductoVendido[2] + "             " + cantidadDisponible[2] +
        "\n" + "4. " + nombreProductoVendido[3] + "                  " + cantidadDisponible[3] +
        "\n" + "5. " + nombreProductoVendido[4] + "              " + cantidadDisponible[4]
    )
    alert("El nuevo listado actualizado con las cantidades ajustadas es: " + nuevoListadoActualizado)
}

//MENU DE OPCIONES

let opcion = 0

while (opcion != 3) {

    opcion = prompt("Bienvenido a la tienda de frutas Harolito, que desea hacer? \n1. comprar un producto. \n2. opciones de desarrollo \n3. Salir")

    if (isNaN(opcion)) {
        alert("Letras no, solo numeros")
    } else if (opcion > 3 || opcion < 1) {
        alert("Ingrese una opcion valida")
    } else {
        if (opcion == 1) {
            let opcionVenta = prompt("Seleccione una opcion:" +
                "\n" + "Productos     /   cantidad" +
                "\n" + "1. " + nombreProductoVendido[0] + "         " + cantidadDisponible[0] +
                "\n" + "2. " + nombreProductoVendido[1] + "                 " + cantidadDisponible[1] +
                "\n" + "3. " + nombreProductoVendido[2] + "             " + cantidadDisponible[2] +
                "\n" + "4. " + nombreProductoVendido[3] + "                  " + cantidadDisponible[3] +
                "\n" + "5. " + nombreProductoVendido[4] + "              " + cantidadDisponible[4]
            )
            if (isNaN(opcionVenta)) {
                alert("Letras no, solo numeros")
            } else if (opcionVenta > 5 || opcionVenta < 1) {
                alert("Ingrese una opcion valida")
            } else if (opcionVenta == 1) {
                let cantidadComprada = prompt("Ingrese la cantidad de " + nombreProductoVendido[0] + " que desea comprar")
                if (isNaN(cantidadComprada)) {
                    alert("Letras no, solo numeros")
                } else if (cantidadComprada < 0) {
                    alert("No numeros negativos")
                } else if (cantidadComprada > cantidadDisponible[0]) {
                    alert("No hay suficiente stock")
                } else if (cantidadComprada <= cantidadDisponible[0]) {
                    cantidadDisponible[0] -= cantidadComprada
                    cantidadVendida[0] += cantidadComprada
                }
            } else if (opcionVenta == 2) {
                let cantidadComprada = prompt("Ingrese la cantidad de " + nombreProductoVendido[1] + " que desea comprar")
                if (isNaN(cantidadComprada)) {
                    alert("Letras no, solo numeros")
                } else if (cantidadComprada < 0) {
                    alert("No numeros negativos")
                } else if (cantidadComprada > cantidadDisponible[1]) {
                    alert("No hay suficiente stock")
                } else if (cantidadComprada <= cantidadDisponible[1]) {
                    cantidadDisponible[1] -= cantidadComprada
                    cantidadVendida[1] += cantidadComprada
                }
            } else if (opcionVenta == 3) {
                let cantidadComprada = prompt("Ingrese la cantidad de " + nombreProductoVendido[2] + " que desea comprar")
                if (isNaN(cantidadComprada)) {
                    alert("Letras no, solo numeros")
                } else if (cantidadComprada < 0) {
                    alert("No numeros negativos")
                } else if (cantidadComprada > cantidadDisponible[2]) {
                    alert("No hay suficiente stock")
                } else if (cantidadComprada <= cantidadDisponible[2]) {
                    cantidadDisponible[2] -= cantidadComprada
                    cantidadVendida[2] += cantidadComprada
                }
            } else if (opcionVenta == 4) {
                let cantidadComprada = prompt("Ingrese la cantidad de " + nombreProductoVendido[3] + " que desea comprar")
                if (isNaN(cantidadComprada)) {
                    alert("Letras no, solo numeros")
                } else if (cantidadComprada < 0) {
                    alert("No numeros negativos")
                } else if (cantidadComprada > cantidadDisponible[3]) {
                    alert("No hay suficiente stock")
                } else if (cantidadComprada <= cantidadDisponible[3]) {
                    cantidadDisponible[3] -= cantidadComprada
                    cantidadVendida[3] += cantidadComprada
                }
            } else if (opcionVenta == 5) {
                let cantidadComprada = prompt("Ingrese la cantidad de " + nombreProductoVendido[4] + " que desea comprar")
                if (isNaN(cantidadComprada)) {
                    alert("Letras no, solo numeros")
                } else if (cantidadComprada < 0) {
                    alert("No numeros negativos")
                } else if (cantidadComprada > cantidadDisponible[4]) {
                    alert("No hay suficiente stock")
                } else if (cantidadComprada <= cantidadDisponible[4]) {
                    cantidadDisponible[4] -= cantidadComprada
                    cantidadVendida[4] += cantidadComprada
                }
            }
        } else if (opcion == 2) {
            let opcionDesarrollo = prompt("Seleccione una opcion:" +
                "\n" + "1. Mostrar todos los productos vendidos, su cantidad y si estaban en promoción." +
                "\n" + "2. Calcular cuántos productos estaban en promoción y cuántos no." +
                "\n" + "3. Calcular el total de unidades vendidas únicamente de los productos en promoción." +
                "\n" + "4. Calcular el promedio general de unidades vendidas por producto." +
                "\n" + "5. Identificar el primer producto vendido que no estaba en promoción." +
                "\n" + "6. Generar un listado con solo los nombres de los productos que sí estaban en promoción." +
                "\n" + "7. Aumentar en 5 unidades las cantidades de los productos no promocionados." +
                "\n" + "8. Mostrar el nuevo listado actualizado con las cantidades ajustadas."
            )
            if (isNaN(opcionDesarrollo)) {
                alert("Letras no, solo numeros")
            } else if (opcionDesarrollo > 8 || opcionDesarrollo < 1) {
                alert("Ingrese una opcion valida")
            }
            else if (opcionDesarrollo == 1) {
                mostrarProductosVendidos()
            } else if (opcionDesarrollo == 2) {
                calcularProductosEnPromocion()
            } else if (opcionDesarrollo == 3) {
                calcularTotalUnidadesVendidas()
            } else if (opcionDesarrollo == 4) {
                calcularPromedioGeneral()
            } else if (opcionDesarrollo == 5) {
                identificarPrimerProductoVendido()
            } else if (opcionDesarrollo == 6) {
                generarListadoProductosEnPromocion()
            } else if (opcionDesarrollo == 7) {
                aumentarCantidadesProductosNoPromocionados()
            } else if (opcionDesarrollo == 8) {
                mostrarNuevoListado()
            }
        }
    }
}