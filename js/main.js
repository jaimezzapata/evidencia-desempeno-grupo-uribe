let ventas = [];

function menuPrincipal() {
  while (true) {
    let opcion = prompt(
      "MENÚ PRINCIPAL:\n" +
      "1. Agregar producto\n" +
      "2. Mostrar resumen de ventas\n" +
      "3. Aumentar precios y ver lista actualizada\n" +
      "4. Salir\n" +
      "Elige una opción (1-4):"
    );

    if (opcion === null) break;

    if (opcion === "1") {
      while (true) {
        let producto = [];

        let nombreProducto = prompt("¿Cuál es el nombre del producto?");
        if (nombreProducto === null) {
          alert("Operación cancelada. Regresando al menú.");
          break;
        }

        let precioInput = prompt("¿Cuál es el precio del producto?");
        if (precioInput === null) {
          alert("Operación cancelada. Regresando al menú.");
          break;
        }

        let precioProducto = parseFloat(precioInput);
        if (isNaN(precioProducto)) {
          alert("¡Eso no es un número! Inténtalo de nuevo.");
          continue;
        }

        let respuesta = prompt("¿El producto tiene descuento? (SI/NO)");
        if (respuesta === null) {
          alert("Operación cancelada. Regresando al menú.");
          break;
        }

        respuesta = respuesta.toLowerCase();
        let tuvoDescuento = respuesta === 'sí' || respuesta === 'si';

        producto.push(nombreProducto, precioProducto, tuvoDescuento);
        ventas.push(producto);

        let continuar = prompt("¿Deseas ingresar otro producto? (SI/NO)");
        if (continuar === null || (continuar.toLowerCase() !== 'si' && continuar.toLowerCase() !== 'sí')) {
          break;
        }
      }

    } else if (opcion === "2") {
      console.log("===== RESUMEN DE VENTAS =====");
      mostrarVentas(ventas);
      calcularDescuentos(ventas);
      console.log("Total con descuento: $" + totalDineroConDescuento(ventas).toFixed(2));
      console.log("Precio promedio: $" + calcularPromedio(ventas).toFixed(2));

      let primerProducto = primeroSinDescuento(ventas);
      if (primerProducto) {
        console.log("Primer producto sin descuento: " + primerProducto[0]);
      } else {
        console.log("No hubo productos sin descuento.");
      }

      let listaDescuento = productosConDescuento(ventas);
      console.log("Productos con descuento: ", listaDescuento);

    } else if (opcion === "3") {
      aumentarPrecioSinDescuento(ventas);
      mostrarPreciosActualizados(ventas);

    } else if (opcion === "4") {
      alert("¡Gracias por usar el programa!");
      break;
    } else {
      alert("Opción inválida. Intenta de nuevo.");
    }
  }
}

menuPrincipal();













