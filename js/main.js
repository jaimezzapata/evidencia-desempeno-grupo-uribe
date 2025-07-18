let pedidos = [];

const iniciarPrograma = () => {
  let continuar = true;

  while (continuar) {
    let opcion = prompt(
      "Menú principal:\n1. Registrar una venta\n2. Salir\n3. Ver resumen de ventas"
    );

    switch (opcion) {
      case "1":
        registrarVenta();
        break;
      case "2":
        continuar = false;
        break;
      case "3":
        verResumenVentas();
        break;
      default:
        alert("Opción inválida. Intenta de nuevo.");
        break;
    }
  }
};

const registrarVenta = () => {
  let cliente = prompt("Nombre del cliente:");
  if (cliente === null || cliente.trim() === "") {
    alert("Nombre inválido.");
    return;
  }

  let valorTexto = prompt("Valor total del pedido:");
  let valor = parseFloat(valorTexto);
  if (isNaN(valor)) {
    alert("Valor inválido.");
    return;
  }

  let pagadoOpcion = prompt("¿El pedido fue pagado?\n1. Sí\n2. No");
  if (pagadoOpcion !== "1" && pagadoOpcion !== "2") {
    alert("Opción inválida. Se asumirá que no fue pagado.");
  }

  let pagado = pagadoOpcion === "1";

  pedidos.push({ cliente, valor, pagado });
};

const verResumenVentas = () => {
  console.log("\n📋 RESUMEN DE VENTAS 📋");
  mostrarPedidos();
  contarPedidos();
  totalRecaudado();
  promedioPedidos();
  primerClientePendiente();
  clientesQuePagaron();
  aplicarRecargo();
  mostrarPedidosActualizados();
};

const mostrarPedidos = () => {
  console.log("\n📦 Pedidos registrados:");
  pedidos.forEach(p => {
    console.log("Cliente: " + p.cliente + ", Valor: $" + p.valor + ", Pagado: " + (p.pagado ? "Sí" : "No"));
  });
};

const contarPedidos = () => {
  let pagados = pedidos.filter(p => p.pagado).length;
  let pendientes = pedidos.filter(p => !p.pagado).length;
  console.log("✅ Pagados: " + pagados);
  console.log("⏳ Pendientes: " + pendientes);
};

const totalRecaudado = () => {
  let total = pedidos
    .filter(p => p.pagado)
    .reduce((suma, p) => suma + p.valor, 0);
  console.log("💰 Total recaudado: $" + total);
};

const promedioPedidos = () => {
  let total = pedidos.reduce((suma, p) => suma + p.valor, 0);
  let promedio = pedidos.length > 0 ? total / pedidos.length : 0;
  console.log("📊 Promedio de pedidos: $" + promedio.toFixed(2));
};

const primerClientePendiente = () => {
  let pendiente = pedidos.find(p => !p.pagado);
  if (pendiente) {
    console.log("🔍 Primer cliente con pedido pendiente: " + pendiente.cliente);
  } else {
    console.log("✅ Todos los pedidos están pagados.");
  }
};

const clientesQuePagaron = () => {
  let lista = pedidos
    .filter(p => p.pagado)
    .map(p => p.cliente);
  console.log("🧾 Clientes que han pagado: " + lista.join(", "));
};

const aplicarRecargo = () => {
  pedidos = pedidos.map(p => {
    if (!p.pagado) {
      return { ...p, valor: Math.round(p.valor * 1.10) };
    }
    return p;
  });
};

const mostrarPedidosActualizados = () => {
  console.log("\n📦 Pedidos actualizados con recargo:");
  pedidos.forEach(p => {
    console.log("Cliente: " + p.cliente + ", Valor: $" + p.valor + ", Pagado: " + (p.pagado ? "Sí" : "No"));
  });
};

iniciarPrograma();