let pedidos = [];
let nuevo;
let valorPedidos = 0;
do {
  let nombre = prompt("Ingrese nombre del cliente:");
  let valor = parseFloat(prompt("Ingrese el valor del pedido:"));
  let estado = prompt("¿Pagó? (si/no)").toLowerCase();

  pedidos.push([nombre, valor, estado]);

  let continuar = prompt("¿Desea ingresar un nuevo registro? (si/no)").toLowerCase();
  nuevo = (continuar === "si");
} while (nuevo === true);

console.log("Todos los pedidos:");
for (let i = 0; i < pedidos.length; i++) {
  console.log(
    "Cliente: " + pedidos[i][0] +
    " - Valor: " + pedidos[i][1] +
    " - Estado: " + pedidos[i][2]
  );
}

let cantidadPagados = 0;
let totalPagados = 0;
let clientesPagaron = [];

for (let i = 0; i < pedidos.length; i++) {
  valorPedidos += pedidos[i][1];
  if (pedidos[i][2] === "si") {
    cantidadPagados++;
    totalPagados += pedidos[i][1];
    clientesPagaron.push(pedidos[i][0], "pagado");
  }
}

let cantidadPendientes = pedidos.length - cantidadPagados;
let promedio = valorPedidos / pedidos.length;

let primerPendiente = "";
for (let i = 0; i < pedidos.length; i++) {
  if (pedidos[i][2] === "no") {
    primerPendiente = pedidos[i][0];
    break;
  }
}

let nuevoListado = [];
for (let i = 0; i < pedidos.length; i++) {
  let nombre = pedidos[i][0];
  let valor = pedidos[i][1];
  let estado = pedidos[i][2];

  if (estado === "no") {
    valor *= 1.10;
  }
  nuevoListado.push([nombre, valor, estado]);
}

console.log("Cantidad de pedidos pagados: " + cantidadPagados);
console.log("Cantidad de pedidos pendientes: " + cantidadPendientes);
console.log("Total recaudado de pedidos pagados: $" + totalPagados);
console.log("Promedio de todos los pedidos: $" + promedio);
console.log("Primer cliente con pedido pendiente: " + primerPendiente);
console.log("Clientes que ya pagaron: " + clientesPagaron);

console.log("Pedidos actualizados con recargo:");
 for (let i = 0; i < nuevoListado.length; i++) {
  console.log("Cliente:", nuevoListado[i][0]);
  console.log("Nuevo valor:", nuevoListado[i][1].toFixed(2));
  console.log("Estado:", nuevoListado[i][2] === "si" ? "Pagado" : "Pendiente");
}
