let ventas = [
  ["Camiseta", 50000, true],
  ["Pantalón", 80000, false],
  ["Chaqueta", 120000, true],
  ["Gorra", 30000, false],
  ["Medias", 10000, true]
];

function mostrarVentas(ventas) {
  let resultado = "Ventas del día:\n";
  for (let i = 0; i < ventas.length; i++) {
    let nombre = ventas[i][0];
    let precio = ventas[i][1];
    let descuento = ventas[i][2] ? "Sí" : "No";
    resultado += `${i + 1}. Producto: ${nombre} | Precio: $${precio} | ¿Descuento?: ${descuento}\n`;
  }
  alert(resultado);
}

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
  alert(`Productos con descuento: ${conDescuento}\nProductos sin descuento: ${sinDescuento}`);
}

function totalConDescuento(ventas) {
  let total = 0;
  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i][2]) {
      total += ventas[i][1];
    }
  }
  alert(`Total recaudado por productos con descuento: $${total}`);
}

function promedioPrecios(ventas) {
  let suma = 0;
  for (let i = 0; i < ventas.length; i++) {
    suma += ventas[i][1];
  }
  let promedio = ventas.length > 0 ? suma / ventas.length : 0;
  alert(`Promedio de precios: $${promedio.toFixed(2)}`);
}

function primerSinDescuento(ventas) {
  for (let i = 0; i < ventas.length; i++) {
    if (!ventas[i][2]) {
      alert(`Primer producto sin descuento: ${ventas[i][0]}`);
      return;
    }
  }
  alert("No hay productos sin descuento.");
}

function productosConDescuento(ventas) {
  let lista = [];
  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i][2]) {
      lista.push(ventas[i][0]);
    }
  }
  if (lista.length > 0) {
    alert("Productos con descuento:\n" + lista.join("\n"));
  } else {
    alert("No hay productos con descuento.");
  }
}

function aumentarPreciosSinDescuento(ventas) {
  for (let i = 0; i < ventas.length; i++) {
    if (!ventas[i][2]) {
      ventas[i][1] = ventas[i][1] * 1.15;
    }
  }
  alert("Se aumentó un 15% al precio de los productos sin descuento.");
}

function mostrarPreciosActualizados(ventas) {
  let resultado = "Precios actualizados:\n";
  for (let i = 0; i < ventas.length; i++) {
    resultado += `${ventas[i][0]}: $${ventas[i][1].toFixed(2)}\n`;
  }
  alert(resultado);
}

function iniciarPrograma() {
  let opcion = "";

  while (opcion !== "9") {
    opcion = prompt(
      "MENÚ DE OPCIONES\n" +
      "1. Mostrar todas las ventas\n" +
      "2. Contar productos con y sin descuento\n" +
      "3. Total recaudado por productos con descuento\n" +
      "4. Calcular el promedio de precios\n" +
      "5. Mostrar el primer producto sin descuento\n" +
      "6. Crear lista con productos con descuento\n" +
      "7. Aumentar 15% al precio de productos sin descuento\n" +
      "8. Mostrar precios actualizados\n" +
      "9. Salir\n\n" +
      "Selecciona una opción (1-9):"
    );

    if (opcion === "1") mostrarVentas(ventas);
    else if (opcion === "2") contarDescuentos(ventas);
    else if (opcion === "3") totalConDescuento(ventas);
    else if (opcion === "4") promedioPrecios(ventas);
    else if (opcion === "5") primerSinDescuento(ventas);
    else if (opcion === "6") productosConDescuento(ventas);
    else if (opcion === "7") aumentarPreciosSinDescuento(ventas);
    else if (opcion === "8") mostrarPreciosActualizados(ventas);
    else if (opcion === "9") alert("Programa finalizado. ¡Chao con adios!");
    else alert("Opción inválida. Intenta de nuevo.");
  }
}

iniciarPrograma();
