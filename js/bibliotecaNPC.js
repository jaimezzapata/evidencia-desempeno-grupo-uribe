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

function mostrarPrestamos() {
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
//mostrarPrestamos()

function devolucionLibros() {
  let devueltos = 0;
  let noDevueltos = 0;

  for (let i = 0; i < estadoDevolucion.length; i++) {
    if (estadoDevolucion[i] === true) {
      devueltos++;
    } else {
      noDevueltos++;
    }
  }

  console.log("Libros devueltos: " + devueltos);
  console.log("Libros no devueltos: " + noDevueltos);
}

//devolucionLibros();

function diasLibrosDevueltos (){
    
}
