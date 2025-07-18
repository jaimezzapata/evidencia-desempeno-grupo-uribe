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


//2. Contar cuántos fueron devueltos a tiempo y cuántos no.
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

  return console.log(
    `Libros devueltos: ${devueltos} Libros no devueltos: ${noDevueltos}`
  );
}



//3. Calcular el total de días en devoluciones a tiempo.
function diasLibrosDevueltos() {
  let diasEfectivos = 0;
  for (let i = 0; i < cantDiasPrestamo.length; i++) {
    if (estadoDevolucion[i] === true) {
      diasEfectivos += cantDiasPrestamo[i];
    }
  }
  return console.log(
    `El total de dias con devoluciones a tiempo es de: ${diasEfectivos}`
  );
}



//4. Calcular el promedio de días prestados.
function promedioDiasPrestados() {
  let diasEfectivos = 0;
  let cantidadDias = 0;
  for (let i = 0; i < cantDiasPrestamo.length; i++) {
    diasEfectivos += cantDiasPrestamo[i];
    cantidadDias++;
  }
  return console.log(
    `El promedio de los dias prestadoses de: ${diasEfectivos / cantidadDias}`
  );
}



//5. Mostrar el primer libro no devuelto a tiempo.

function libroSinDevolver() {
  for (let i = 0; i < estadoDevolucion.length; i++) {
    if (estadoDevolucion[i] === false) {
      return console.log(`Primer libro no devuelto a tiempo: "${tituloLibro[i]}"`);
    }
  }
}


//6. Crear una lista de títulos devueltos a tiempo. 

function devueltosConTiempo (){
let librosEntregados = []
for (let i = 0; i < tituloLibro.length; i++) {
  if (estadoDevolucion[i] == true){
    librosEntregados.push(tituloLibro[i]);
  }
  
  
}
return console.log(`Estos son los libros que se han devuelto a tiempo: ${librosEntregados}`);

}


//7. Aumentar 2 días a los libros con retraso.  

function aumentoRetraso (){
  for (let i = 0; i < estadoDevolucion.length; i++){
      if (estadoDevolucion[i] === false) {
    cantDiasPrestamo[i] += 2
  }
}
  return cantDiasPrestamo
  
}


function listaActualizada (){
  let librosRetraso = aumentoRetraso(cantDiasPrestamo)
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


mostrarPrestamos()
console.log("------------------------------------------------------------------------");

devolucionLibros();
console.log("------------------------------------------------------------------------");
diasLibrosDevueltos()
console.log("------------------------------------------------------------------------");
promedioDiasPrestados()
console.log("------------------------------------------------------------------------");
libroSinDevolver();
console.log("------------------------------------------------------------------------");
devueltosConTiempo()
console.log("------------------------------------------------------------------------");
listaActualizada()