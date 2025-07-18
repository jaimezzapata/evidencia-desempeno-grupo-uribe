//1. Mostrar todas las ventas con nombre del producto, precio y si tuvo descuento.
function mostrarVentas(ventas) {
  ventas.forEach(function(producto) {
    console.log("Nombre del producto: " + producto[0]);
    console.log("Precio del producto: " + producto[1]);
    console.log("Tuvo descuento: " + (producto[2] ? "sí" : "no"));
    console.log("---------------------");
  });
}
//2. Calcular cuántos productos se vendieron con descuento y cuántos no.
function calcularDescuentos(ventas){
  let productosConDescuento = [];
  let productosSinDescuento = [];

  for(let i = 0; i < ventas.length; i++){
    let producto = ventas[i];
    if(producto[2] === true){
      productosConDescuento.push(producto);
    } else {
      productosSinDescuento.push(producto);
    }
  }

  console.log("Con descuento:", productosConDescuento.length);
  console.log("Sin descuento:", productosSinDescuento.length);
}

//3. Calcular el total de dinero recaudado solo con productos vendidos con descuento.
function totalDineroConDescuento(ventas) {
  let total = 0;
  ventas.forEach(function(producto) {
    if (producto[2] === true && producto[1] > 0) {
      total += producto[1];
    }
  });
  return total;
}

//4. Calcular el precio promedio de todos los productos.
function calcularPromedio(ventas) {
  let totalProductos = 0;
  let totalDinero = 0;

  ventas.forEach(function(producto) {
    totalProductos += 1;            
    totalDinero += producto[1];
  });
  return totalDinero / totalProductos;
}
//5. Mostrar el primer producto vendido sin descuento.
function primeroSinDescuento(ventas) {
  for (let i = 0; i < ventas.length; i++) {
    let producto = ventas[i];
    if (producto[2] === false) {
      return producto; 
    }
  }
  return null;
}
//6. Crear una nueva lista con los nombres de los productos con descuento.
function productosConDescuento(ventas) {
  let productosConDescuento = [];
  for (let i = 0; i < ventas.length; i++) {
    let producto = ventas[i];
    if (producto[2] === true) {
      productosConDescuento.push(producto[0]); // solo el nombre
    }
  }
 return productosConDescuento;
}

//7. Aumentar en 15% el precio de los productos sin descuento (por ajuste de tarifa).
function aumentarPrecioSinDescuento(ventas) {
  for (let i = 0; i < ventas.length; i++) {
    let producto = ventas[i];
    if (producto[2] === false) {
      producto[1] *= 1.15; // Aumenta el precio en un 15%
    }
  }
}
//8. Mostrar nuevamente el listado de precios actualizado.
function mostrarPreciosActualizados(ventas) {
  console.log("Precios actualizados:");
  ventas.forEach(function(producto) {
    console.log(producto[0] + ": $" + producto[1].toFixed(2));
  });
}