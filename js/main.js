let pedidos = [];

function agregarPedidos() {
    let agregarOtro = true;

    while (agregarOtro) {
        let cliente = prompt("Ingrese el nombre del cliente:");
        let valorTexto = prompt("Ingrese el valor del pedido (solo números):");
        while (isNaN(valorTexto) || valorTexto.trim() === "") {
            valorTexto = prompt("Valor inválido. Ingrese solo números:");
        }
        let valor = parseInt(valorTexto);

        let pagadoTexto = prompt("¿El pedido fue pagado? (si/no):").toLowerCase();

        let pagado = (pagadoTexto === 'si');

        pedidos.push([cliente, valor, pagado]);

        let continuar = prompt("¿Desea ingresar otro pedido? (sí o no):");

        if (continuar === "no") {
            agregarOtro = false;
        }

    }
}

function mostrarPedidos(pedidos) {
    console.log("\n===== Lista de pedidos =====\n");
    for (let i = 0; i < pedidos.length; i++) {
        let cliente = pedidos[i][0];
        let valor = pedidos[i][1];
        let pagado = pedidos[i][2];

        if (pagado === true) {
            console.log('Cliente: ' + cliente + ' - Valor: ' + valor + ' - Pagado: Sí');
        } else {
            console.log('Cliente: ' + cliente + ' - Valor: ' + valor + ' - Pagado: No');
        }
    }
    console.log("\n============================\n");
}

function contarPagos(pedidos) {
    console.log("\n===== Conteo de pagos =====\n");
    let pagados = 0;
    let pendientes = 0;

    for (let i = 0; i < pedidos.length; i++) {
        let pagado = pedidos[i][2];

        if (pagado === true) {
            pagados++;
        } else {
            pendientes++;
        }
    }

    console.log('Pedidos pagados: ' + pagados);
    console.log('Pedidos pendientes: ' + pendientes);
    console.log("\n===========================\n");
}

function calcularTotalRecaudado(pedidos) {
    console.log("\n===== Total recaudado =====\n");
    let total = 0;

    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i][2] === true) {
            total += pedidos[i][1];
        }
    }

    console.log('Total recaudado: $' + total);
    console.log("\n===========================\n");
}

function calcularPromedioPedidos(pedidos) {
    console.log("\n===== Promedio pedidos =====\n");
    let sumaTotal = 0;
    for (let i = 0; i < pedidos.length; i++) {
        sumaTotal += pedidos[i][1];
    }
    let promedio = sumaTotal / pedidos.length;

    console.log("Valor promedio de los pedidos: $" + promedio);
    console.log("\n============================\n");
}

function mostrarPrimerPendiente(pedidos) {
    console.log("\n===== Primer pedido pendiente =====\n");
    let encontrado = false;
    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i][2] === false) {
            console.log("El primer cliente con pedido pendiente es: " + pedidos[i][0]);
            encontrado = true;
            break;
        }
    }

    if (!encontrado) {
        console.log("Todos los pedidos han sido pagados.");
    }
    console.log("\n===================================\n");
}

function obtenerClientesPagaron(pedidos) {
    console.log("\n===== Clientes que pagaron =====\n");

    pedidos.forEach(function (pedido) {
        if (pedido[2] === true) {
            console.log("- " + pedido[0]);
        }
    });

    console.log("\n================================\n");
}

function aplicarRecargoPendientes(pedidos) {
    console.log("\n===== Recargos aplicados =====\n");
    for (let i = 0; i < pedidos.length; i++) {
        if (pedidos[i][2] === false) {
            let valorActual = pedidos[i][1];
            let recargo = valorActual * 0.10;
            let nuevoValor = valorActual + recargo;

            console.log("Cliente: " + pedidos[i][0]);
            console.log("  Valor antes del recargo: $" + valorActual);
            console.log("  Valor después del recargo: $" + nuevoValor);

            pedidos[i][1] = nuevoValor;

        }
    }
    console.log("\n==============================\n");
}

agregarPedidos();
mostrarPedidos(pedidos);
contarPagos(pedidos);
calcularTotalRecaudado(pedidos);
calcularPromedioPedidos(pedidos);
mostrarPrimerPendiente(pedidos);
obtenerClientesPagaron(pedidos);
aplicarRecargoPendientes(pedidos);
mostrarPedidos(pedidos);
