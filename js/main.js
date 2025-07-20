
let titulos = [
  "Cien años de soledad",
  "1984",
  "Don Quijote",
  "Harry Potter",
  "El Principito"
];

let dias = [7, 5, 10, 4, 6];
let devueltosATiempo = [true, false, true, false, true];

function mostrarPrestamos() {
  console.log(" Lista de préstamos:");
  for (let i = 0; i < titulos.length; i++) {
    console.log(`- ${titulos[i]} | ${dias[i]} días | Devuelto a tiempo: ${devueltosATiempo[i]}`);
  }
  console.log("");
}

function contarDevoluciones() {
  let aTiempo = 0;
  let conRetraso = 0;
  for (let i = 0; i < devueltosATiempo.length; i++) {
    if (devueltosATiempo[i]) {
      aTiempo++;
    } else {
      conRetraso++;
    }
  }
  console.log(` Devueltos a tiempo: ${aTiempo}`);
  console.log(` Con retraso: ${conRetraso}\n`);
}


function totalDiasATiempo() {
  let total = 0;
  for (let i = 0; i < dias.length; i++) {
    if (devueltosATiempo[i]) {
      total += dias[i];
    }
  }
  console.log(` Total de días en préstamos devueltos a tiempo: ${total}\n`);
}


function promedioDiasPrestamo() {
  let total = 0;
  for (let i = 0; i < dias.length; i++) {
    total += dias[i];
  }
  let promedio = total / dias.length;
  console.log(` Promedio de días por préstamo: ${promedio.toFixed(2)}\n`);
}


function primerRetraso() {
  for (let i = 0; i < devueltosATiempo.length; i++) {
    if (!devueltosATiempo[i]) {
      console.log(` Primer libro no devuelto a tiempo: ${titulos[i]}\n`);
      return;
    }
  }
  console.log(" Todos los libros fueron devueltos a tiempo\n");
}

function librosDevueltos() {
  console.log(" Libros devueltos a tiempo:");
  for (let i = 0; i < titulos.length; i++) {
    if (devueltosATiempo[i]) {
      console.log(`- ${titulos[i]}`);
    }
  }
  console.log("");
}

function aplicarSancion() {
  for (let i = 0; i < dias.length; i++) {
    if (!devueltosATiempo[i]) {
      dias[i] += 2;
    }
  }
}

function mostrarActualizado() {
  console.log(" Lista actualizada con sanciones:");
  for (let i = 0; i < titulos.length; i++) {
    console.log(`- ${titulos[i]} | ${dias[i]} días | Devuelto a tiempo: ${devueltosATiempo[i]}`);
  }
  console.log("");
}

mostrarPrestamos();
contarDevoluciones();
totalDiasATiempo();
promedioDiasPrestamo();
primerRetraso();
librosDevueltos();
aplicarSancion();
mostrarActualizado();

