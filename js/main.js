let listaNombresProductos = [];
let listaPreciosProductos = [];
let listaDescuentosProductos = []; 

const agregarVenta = () => {
  const nombreProducto = prompt("📦 Ingresa el nombre del producto:");
  const precioProducto = parseFloat(prompt("💲 Ingresa el precio del producto:"));
  const tieneDescuento = prompt("¿Tiene descuento? (si/no)").toLowerCase() === "si" ? 1 : 0;

  if (nombreProducto && !isNaN(precioProducto)) {
    listaNombresProductos.push(nombreProducto);
    listaPreciosProductos.push(precioProducto);
    listaDescuentosProductos.push(tieneDescuento);
    alert(`✅ Venta agregada: ${nombreProducto}`);
  } else {
    alert("❌ Datos inválidos. Intenta de nuevo.");
  }
};

const mostrarVentas = () => {
  if (listaNombresProductos.length === 0) {
    alert("🚫 No hay ventas registradas.");
    return;
  }

  let mensaje = "📋 Lista de Ventas:\n";
  for (let i = 0; i < listaNombresProductos.length; i++) {
    mensaje += `• ${listaNombresProductos[i]} | $${listaPreciosProductos[i].toFixed(2)} | Descuento: ${listaDescuentosProductos[i] === 1 ? "Sí" : "No"}\n`;
  }
  alert(mensaje);
};

const contarVentasConDescuento = () => {
  let cantidadConDescuento = 0;
  let cantidadSinDescuento = 0;

  for (let i = 0; i < listaDescuentosProductos.length; i++) {
    if (listaDescuentosProductos[i] === 1) {
      cantidadConDescuento++;
    } else {
      cantidadSinDescuento++;
    }
  }

  alert(`✔️ Con descuento: ${cantidadConDescuento}\n❌ Sin descuento: ${cantidadSinDescuento}`);
};

const calcularTotalConDescuento = () => {
  let total = 0;

  for (let i = 0; i < listaPreciosProductos.length; i++) {
    if (listaDescuentosProductos[i] === 1) {
      total += listaPreciosProductos[i];
    }
  }

  alert(`💰 Total de ventas con descuento: $${total.toFixed(2)}`);
};

const calcularPrecioPromedio = () => {
  if (listaPreciosProductos.length === 0) {
    alert("🚫 No hay ventas registradas.");
    return;
  }

  let sumaPrecios = 0;
  for (let i = 0; i < listaPreciosProductos.length; i++) {
    sumaPrecios += listaPreciosProductos[i];
  }
  const promedio = sumaPrecios / listaPreciosProductos.length;
  alert(`📊 Precio promedio: $${promedio.toFixed(2)}`);
};

const mostrarPrimerProductoSinDescuento = () => {
  for (let i = 0; i < listaNombresProductos.length; i++) {
    if (listaDescuentosProductos[i] === 0) {
      alert(`🔍 Primer producto sin descuento: ${listaNombresProductos[i]}`);
      return;
    }
  }
  alert("✅ Todos los productos tienen descuento.");
};

const listarProductosConDescuento = () => {
  let productosConDescuento = "";

  for (let i = 0; i < listaNombresProductos.length; i++) {
    if (listaDescuentosProductos[i] === 1) {
      productosConDescuento += listaNombresProductos[i] + ", ";
    }
  }

  if (productosConDescuento !== "") {
    alert(`📂 Productos con descuento: ${productosConDescuento.slice(0, -2)}`);
  } else {
    alert("🚫 No hay productos con descuento.");
  }
};

const aumentarPreciosSinDescuento = () => {
  for (let i = 0; i < listaPreciosProductos.length; i++) {
    if (listaDescuentosProductos[i] === 0) {
      listaPreciosProductos[i] *= 1.15;
    }
  }
  alert("🔧 Se aumentaron en 15% los precios de productos sin descuento.");
};

const mostrarMenu = () => {
  let opcion = "";
  do {
    opcion = prompt(
      "📌 MENÚ PRINCIPAL:\n" +
      "1 Agregar Venta\n" +
      "2 Mostrar Ventas\n" +
      "3 Contar Ventas con y sin Descuento\n" +
      "4 Calcular Total con Descuento\n" +
      "5 Calcular Precio Promedio\n" +
      "6 Mostrar Primer Producto sin Descuento\n" +
      "7 Listar Productos con Descuento\n" +
      "8 Aumentar Precios sin Descuento\n" +
      "9 Salir\n" +
      "Elige una opción (1-9):"
    );

    switch (opcion) {
      case "1": agregarVenta(); break;
      case "2": mostrarVentas(); break;
      case "3": contarVentasConDescuento(); break;
      case "4": calcularTotalConDescuento(); break;
      case "5": calcularPrecioPromedio(); break;
      case "6": mostrarPrimerProductoSinDescuento(); break;
      case "7": listarProductosConDescuento(); break;
      case "8": aumentarPreciosSinDescuento(); break;
      case "9": alert("👋 Programa finalizado."); break;
      default: alert("❌ Opción no válida.");
    }
  } while (opcion !== "9");
};

mostrarMenu();