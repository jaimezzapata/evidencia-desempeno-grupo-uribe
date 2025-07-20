// Datos de ventas: [nombre, precio, conDescuento]
let ventas = [
    ["Camisa", 25.00, true],
    ["Pantalón", 40.00, false],
    ["Falda", 30.00, true],
    ["Chaqueta", 60.00, false],
    ["Gorra", 15.00, true],
    ["Zapatos", 50.00, false]
];

// 1. Mostrar todas las ventas
function mostrarVentas(ventas) {
    for (let i = 0; i < ventas.length; i++) {
        let venta = ventas[i];
        console.log("Producto:", venta[0], "| Precio: $", venta[1], "| Descuento:", venta[2]);
    }
}

// 2. Contar productos con y sin descuento
function contarDescuentos(ventas) {
    let conDescuento = 0;
    let sinDescuento = 0;
    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i][2]) {
            conDescuento++;
        } else {
            sinDescuento++;
        }
    }
    console.log("Con descuento:", conDescuento);
    console.log("Sin descuento:", sinDescuento);
}

// 3. Total recaudado solo con productos con descuento
function totalConDescuento(ventas) {
    let total = 0;
    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i][2]) {
            total += ventas[i][1];
        }
    }
    console.log("Total recaudado por productos con descuento: $", total);
}

// 4. Precio promedio de todos los productos
function calcularPrecioPromedio(ventas) {
    let suma = 0;
    for (let i = 0; i < ventas.length; i++) {
        suma += ventas[i][1];
    }
    let promedio = suma / ventas.length;
    console.log("Precio promedio de productos: $", promedio);
}

// 5. Mostrar primer producto vendido sin descuento
function primerSinDescuento(ventas) {
    for (let i = 0; i < ventas.length; i++) {
        if (!ventas[i][2]) {
            console.log("Primer producto sin descuento:", ventas[i][0]);
            return;
        }
    }
    console.log("Todos los productos tienen descuento.");
}

// 6. Lista con los nombres de productos con descuento
function listaProductosConDescuento(ventas) {
    let lista = [];
    for (let i = 0; i < ventas.length; i++) {
        if (ventas[i][2]) {
            lista.push(ventas[i][0]);
        }
    }
    console.log("Productos con descuento:", lista);
    return lista;
}

// 7. Aumentar 15% al precio de productos sin descuento
function aumentarPrecioSinDescuento(ventas) {
    for (let i = 0; i < ventas.length; i++) {
        if (!ventas[i][2]) {
            ventas[i][1] = ventas[i][1] * 1.15;
        }
    }
}

// 8. Mostrar listado actualizado
function mostrarVentasActualizadas(ventas) {
    console.log("Listado actualizado de precios:");
    for (let i = 0; i < ventas.length; i++) {
        console.log("Producto:", ventas[i][0], "| Precio nuevo: $", ventas[i][1]);
    }
}

// --- Ejecución ---
console.log("=== 1. Listado de Ventas ===");
mostrarVentas(ventas);

console.log("\n=== 2. Conteo de Descuentos ===");
contarDescuentos(ventas);

console.log("\n=== 3. Total Con Descuento ===");
totalConDescuento(ventas);

console.log("\n=== 4. Precio Promedio ===");
calcularPrecioPromedio(ventas);

console.log("\n=== 5. Primer Producto Sin Descuento ===");
primerSinDescuento(ventas);

console.log("\n=== 6. Lista de Productos Con Descuento ===");
listaProductosConDescuento(ventas);

console.log("\n=== 7. Aumento del 15% a Productos Sin Descuento ===");
aumentarPrecioSinDescuento(ventas);

console.log("\n=== 8. Ventas Con Precios Actualizados ===");
mostrarVentasActualizadas(ventas);

