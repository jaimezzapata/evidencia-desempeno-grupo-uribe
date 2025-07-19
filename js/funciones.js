let tituloLibro = [
  "Cien años de soledad",
  "El Principito",
  "1984",
  "Don Quijote de la Mancha",
  "La sombra del viento",
  "Crónica de una muerte anunciada",
  "Harry Potter y la piedra filosofal",
  "Los juegos del hambre",
  "Orgullo y prejuicio",
  "El alquimista",
];
let cantDiasPrestamo = [15, 7, 20, 30, 14, 10, 21, 12, 18, 9];
let estadoDevolucion = [
  true,
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
];

//1. Mostrar todos los préstamos, días y estado.
export function mostrarPrestamos() {
  for (let i = 0; i < tituloLibro.length; i++) {
    console.log(
      `Prestamo #${i + 1}: Libro prestado: ${
        tituloLibro[i]
      } - # de dias de prestamo: ${
        cantDiasPrestamo[i]
      } dias - Estado de devolucion: ${estadoDevolucion[i]}`
    );
  }
}

//2. Contar cuántos fueron devueltos a tiempo y cuántos no.
export function devolucionLibros() {
  let librosDevueltos = estadoDevolucion.filter(function (libro) {
    return libro == true;
  });
  let librosNoDevueltos = estadoDevolucion.filter(function (libro) {
    return libro == false;
  });
  console.log(
    `Libros devueltos: ${librosDevueltos.length} --- Libros no devueltos: ${librosNoDevueltos.length}`
  );
}

//3. Calcular el total de días en devoluciones a tiempo.
export function cantDiasDevueltos() {
  let diasEfectivos = cantDiasPrestamo.reduce(function (
    acumuladorDias,
    dia,
    i
  ) {
    if (estadoDevolucion[i] === true) {
      return (acumuladorDias += dia);
    } else {
      return acumuladorDias;
    }
  });
  console.log(
    `El total de dias con devoluciones a tiempo es de: ${diasEfectivos} dias`
  );
}

//4. Calcular el promedio de días prestados.
export function promedioDiasPrestados() {
  let diasEfectivos = 0;
  let cantidadDias = 0;
  for (let i = 0; i < cantDiasPrestamo.length; i++) {
    diasEfectivos += cantDiasPrestamo[i];
    cantidadDias++;
  }
  return console.log(
    `El promedio de la cantidad de dias por libros prestados es de: ${diasEfectivos / cantidadDias} dias`
  );
}

//5. Mostrar el primer libro no devuelto a tiempo.
export function primerLibro() {
  const libro = tituloLibro.find((_, i) => estadoDevolucion[i] === false);

  if (libro) {
    console.log(`Primer libro no devuelto es: ${libro}`);
  } else {
    console.log("Todos los libros fueron devueltos a tiempo.");
  }
}

//6. Crear una lista de títulos devueltos a tiempo.
export function devueltosConTiempo() {
  let librosEntregados = tituloLibro.filter(
    (_, i) => estadoDevolucion[i] === false
  );
  console.log(
    `Estos son los libros que se han devuelto a tiempo: ${librosEntregados}`
  );
}

//7. Aumentar 2 días a los libros con retraso.
export function aumentoRetraso() {
  cantDiasPrestamo.forEach(function (dias, i) {
    if (estadoDevolucion[i] === false) {
      cantDiasPrestamo[i] += 2;
      return dias;
    }
  });
}

//Listado Actualizado
export function listaActualizada() {
  aumentoRetraso(cantDiasPrestamo);
  for (let i = 0; i < tituloLibro.length; i++) {
    console.log(
      `Prestamo #${i + 1}: Libro prestado: ${
        tituloLibro[i]
      } - # de dias de prestamo: ${
        cantDiasPrestamo[i]
      } dias - Estado de devolucion: ${estadoDevolucion[i]}`
    );
  }
}
