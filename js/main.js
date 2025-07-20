let clientes = ["Ana", "Luis", "Pedro", "Lucía", "Marta"];
let pedidos = [20000, 15000, 30000, 18000, 25000];
let pagado = [true, false, true, false, true];

function mostrarPedidos() {
  console.log("Pedidos del día:");
  for (let i = 0; i < clientes.length; i++) {
    let estado = pagado[i] ? "Sí" : "No";
    console.log(clientes[i] + " | $" + pedidos[i] + " | Pagado: " + estado);
  }
}

function contarPagos() {
  let pagados = 0;
  let pendientes = 0;
  for (let i = 0; i < pagado.length; i++) {
    if (pagado[i]) {
      pagados++;
    } else {
      pendientes++;
    }
  }
  console.log("Pagados: " + pagados);
  console.log("Pendientes: " + pendientes);
}

function totalRecaudado() {
  let total = 0;
  for (let i = 0; i < pedidos.length; i++) {
    if (pagado[i]) {
      total += pedidos[i];
    }
  }
  console.log("Total recaudado: $" + total);
}

function promedioPedidos() {
  let suma = 0;
  for (let i = 0; i < pedidos.length; i++) {
    suma += pedidos[i];
  }
  let promedio = suma / pedidos.length;
  console.log("Promedio de pedidos: $" + promedio);
}

function primerPendiente() {
  for (let i = 0; i < pagado.length; i++) {
    if (!pagado[i]) {
      console.log("Primer cliente pendiente: " + clientes[i]);
      return;
    }
  }
}

function mostrarPagadores() {
  console.log("Clientes que han pagado:");
  for (let i = 0; i < pagado.length; i++) {
    if (pagado[i]) {
      console.log("- " + clientes[i]);
    }
  }
}

function aplicarRecargo() {
  for (let i = 0; i < pagado.length; i++) {
    if (!pagado[i]) {
      pedidos[i] = pedidos[i] + (pedidos[i] * 0.1);
    }
  }
  console.log("Recargo aplicado.");
}

function mostrarActualizados() {
  console.log("Pedidos actualizados:");
  for (let i = 0; i < clientes.length; i++) {
    let estado = pagado[i] ? "Sí" : "No";
    console.log(clientes[i] + " | $" + pedidos[i].toFixed(2) + " | Pagado: " + estado);
  }
}

mostrarPedidos();
contarPagos();
totalRecaudado();
promedioPedidos();
primerPendiente();
mostrarPagadores();
aplicarRecargo();
mostrarActualizados();
