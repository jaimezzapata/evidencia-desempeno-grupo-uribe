const estudiantes = [
  ["Ana", 4.5, true],
  ["Luis", 2.8, false],
  ["Marta", 3.2, true],
  ["Pedro", 1.9, false],
  ["Sofía", 4.0, true]
];

function mostrarEvaluaciones(lista) {
  for (let i = 0; i < lista.length; i++) {
    const nombre = lista[i][0];
    const nota = lista[i][1];
    const aprobo = lista[i][2];
    console.log(`${nombre} - Nota: ${nota} - ¿Aprobó?: ${aprobo}`);
  }
}

function contarResultados(lista) {
  let aprobados = 0;
  let reprobados = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i][2]) {
      aprobados++;
    } else {
      reprobados++;
    }
  }

  console.log(`Aprobados: ${aprobados}`);
  console.log(`Reprobados: ${reprobados}`);
}

function promedioAprobadas(lista) {
  let suma = 0;
  let contador = 0;

  for (let i = 0; i < lista.length; i++) {
    if (lista[i][2]) {
      suma += lista[i][1];
      contador++;
    }
  }

  const promedio = contador > 0 ? suma / contador : 0;
  console.log(`Promedio notas aprobadas: ${promedio.toFixed(2)}`);
}

function promedioGeneral(lista) {
  let suma = 0;

  for (let i = 0; i < lista.length; i++) {
    suma += lista[i][1];
  }

  const promedio = suma / lista.length;
  console.log(`Promedio general: ${promedio.toFixed(2)}`);
}

function primerReprobado(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (!lista[i][2]) {
      console.log(`Primer reprobado: ${lista[i][0]}`);
      return;
    }
  }
}

function listaAprobados(lista) {
  const aprobados = [];

  for (let i = 0; i < lista.length; i++) {
    if (lista[i][2]) {
      aprobados.push(lista[i][0]);
    }
  }

  console.log("Estudiantes que aprobaron:");
  for (let i = 0; i < aprobados.length; i++) {
    console.log(aprobados[i]);
  }
}

function aumentarNotaReprobados(lista) {
  for (let i = 0; i < lista.length; i++) {
    if (!lista[i][2]) {
      lista[i][1] += 0.5;
      if (lista[i][1] > 5.0) {
        lista[i][1] = 5.0;
      }
    }
  }
}

function mostrarNuevoListado(lista) {
  console.log("Listado actualizado:");
  for (let i = 0; i < lista.length; i++) {
    const nombre = lista[i][0];
    const nota = lista[i][1];
    const nuevaAprobacion = nota >= 3.0;
    console.log(`${nombre} - Nota actualizada: ${nota.toFixed(2)} - ¿Aprobó ahora?: ${nuevaAprobacion}`);
  }
}

// Ejecutar funciones
mostrarEvaluaciones(estudiantes);
contarResultados(estudiantes);
promedioAprobadas(estudiantes);
promedioGeneral(estudiantes);
primerReprobado(estudiantes);
listaAprobados(estudiantes);
aumentarNotaReprobados(estudiantes);
mostrarNuevoListado(estudiantes);
