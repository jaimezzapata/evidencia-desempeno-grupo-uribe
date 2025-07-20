let evaluaciones = [];
let cantidad = Number(prompt("¿Cuántos estudiantes vas a registrar?"));
for (let i = 0; i < cantidad; i++) {
  let nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
  let nota = parseFloat(prompt(`Ingrese la nota de ${nombre} (0.0 a 5.0):`));
  let aprobo = nota >= 3.0;
  evaluaciones.push({ nombre: nombre, nota: nota, aprobo: aprobo });
}

function mostrarEvaluaciones() {
  console.log(" Evaluaciones registradas:");
  for (let i of evaluaciones) {
    console.log(`Nombre: ${i.nombre}, Nota: ${i.nota}, Aprobó: ${i.aprobo}`);
  }
}

function contarResultados() {
  let aprobados = 0;
  let reprobados = 0;
  for (let i of evaluaciones) {
    if (i.aprobo) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  console.log(" Aprobados:", aprobados);
  console.log(" Reprobados:", reprobados);
}

function promedioAprobados() {
  let suma = 0;
  let cantidad = 0;
  for (let i of evaluaciones) {
    if (i.aprobo) {
      suma += i.nota;
      cantidad++;
    }
  }
  if (cantidad > 0) {
    console.log(" Promedio de aprobados:", (suma / cantidad).toFixed(2));
  } else {
    console.log("Nadie aprobó.");
  }
}

function promedioGeneral() {
  let suma = 0;
  for (let i of evaluaciones) {
    suma += i.nota;
  }
  console.log(" Promedio general:", (suma / evaluaciones.length).toFixed(2));
}

function primerReprobado() {
  for (let i of evaluaciones) {
    if (!i.aprobo) {
      console.log(" Primer estudiante que reprobó:", i.nombre);
      return;
    }
  }
  console.log("Nadie reprobó.");
}

function listaAprobados() {
  let lista = [];
  for (let i of evaluaciones) {
    if (i.aprobo) {
      lista.push(i.nombre);
    }
  }
  console.log(" Aprobados:", lista);
}

function ajustarNotas() {
  for (let i of evaluaciones) {
    if (!i.aprobo) {
      i.nota += 0.5;
      if (i.nota >= 3.0) {
        i.aprobo = true;
      }
    }
  }
}

function mostrarNotasActualizadas() {
  console.log(" Notas después del ajuste:");
  for (let i of evaluaciones) {
    console.log(`Nombre: ${i.nombre}, Nota: ${i.nota.toFixed(1)}, Aprobó: ${i.aprobo}`);
  }
}

mostrarEvaluaciones();
contarResultados();
promedioAprobados();
promedioGeneral();
primerReprobado();
listaAprobados();
ajustarNotas();
mostrarNotasActualizadas();
