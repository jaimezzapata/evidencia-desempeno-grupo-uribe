let nombresEstudiantes = [];
let notasEstudiantes = [];
let estadosAprobacion = [];

function solicitarNumero(mensaje, min, max) {
  let entrada;
  let numero;
  let esValido = false;
  while (!esValido) {
    entrada = prompt(mensaje);
    if (entrada === null) { 
      return null;
    }
    numero = parseFloat(entrada);
    if (!isNaN(numero) && numero >= min && numero <= max) {
      esValido = true;
    } else {
      alert(`Por favor, ingrese un número entre ${min} y ${max}.`);
    }
  }
  return numero;
}

function solicitarTexto(mensaje) {
  let entrada;
  let esValido = false;
  while (!esValido) {
    entrada = prompt(mensaje);
    if (entrada === null) { 
      return null;
    }
    if (entrada.trim() !== "") {
      esValido = true;
    } else {
      alert("Por favor, ingrese un valor no vacío.");
    }
  }
  return entrada.trim();
}

function agregarEvaluaciones() {
  let agregarMas = true;
  while (agregarMas) {
    let nombre = solicitarTexto("Ingrese el nombre del estudiante (o cancele para terminar):");
    if (nombre === null) {
      agregarMas = false;
      continue;
    }

    let nota = solicitarNumero(`Ingrese la nota de ${nombre} (entre 0.0 y 5.0):`, 0.0, 5.0);
    if (nota === null) {
      agregarMas = false;
      continue;
    }

    let aprobo = nota >= 3.0; 
    nombresEstudiantes[nombresEstudiantes.length] = nombre;
    notasEstudiantes[notasEstudiantes.length] = nota;
    estadosAprobacion[estadosAprobacion.length] = aprobo;

    let continuar = confirm("¿Desea agregar otra evaluación?");
    if (!continuar) {
      agregarMas = false;
    }
  }
}

function mostrarTodasLasEvaluaciones() {
  let reporte = "--- Reporte de Evaluaciones ---\n";
  if (nombresEstudiantes.length === 0) {
    reporte += "No hay evaluaciones registradas.\n";
  } else {
    for (let i = 0; i < nombresEstudiantes.length; i++) {
      reporte += `Estudiante: ${nombresEstudiantes[i]}, Nota: ${notasEstudiantes[i].toFixed(1)}, Aprobado: ${estadosAprobacion[i] ? 'Sí' : 'No'}\n`;
    }
  }
  alert(reporte);
}

function contarAprobadosYReprobados() {
  let aprobados = 0;
  let reprobados = 0;
  for (let i = 0; i < estadosAprobacion.length; i++) {
    if (estadosAprobacion[i]) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  alert(`Estudiantes Aprobados: ${aprobados}\nEstudiantes Reprobados: ${reprobados}`);
}

function calcularPromedioNotasAprobadas() {
  let sumaNotasAprobadas = 0;
  let cantidadAprobados = 0;
  for (let i = 0; i < notasEstudiantes.length; i++) {
    if (estadosAprobacion[i]) {
      sumaNotasAprobadas += notasEstudiantes[i];
      cantidadAprobados++;
    }
  }
  if (cantidadAprobados > 0) {
    let promedio = sumaNotasAprobadas / cantidadAprobados;
    alert(`Promedio de notas de estudiantes aprobados: ${promedio.toFixed(2)}`);
  } else {
    alert("No hay estudiantes aprobados para calcular el promedio.");
  }
}

function calcularPromedioGeneral() {
  let sumaTodasLasNotas = 0;
  if (notasEstudiantes.length === 0) {
    alert("No hay notas para calcular el promedio general.");
    return;
  }
  for (let i = 0; i < notasEstudiantes.length; i++) {
    sumaTodasLasNotas += notasEstudiantes[i];
  }
  let promedioGeneral = sumaTodasLasNotas / notasEstudiantes.length;
  alert(`Promedio general de todas las notas: ${promedioGeneral.toFixed(2)}`);
}

function mostrarPrimerEstudianteQueReprobo() {
  let primerReprobado = "No se encontró ningún estudiante que haya reprobado.";
  for (let i = 0; i < nombresEstudiantes.length; i++) {
    if (!estadosAprobacion[i]) {
      primerReprobado = nombresEstudiantes[i];
      break;
    }
  }
  alert(`Primer estudiante que reprobó: ${primerReprobado}`);
}

function crearListaNombresAprobados() {
  let nombresAprobados = [];
  for (let i = 0; i < nombresEstudiantes.length; i++) {
    if (estadosAprobacion[i]) {
      nombresAprobados[nombresAprobados.length] = nombresEstudiantes[i];
    }
  }
  if (nombresAprobados.length > 0) {
    alert(`Nombres de estudiantes que aprobaron: ${nombresAprobados.join(", ")}`);
  } else {
    alert("No hay estudiantes aprobados.");
  }
}

function ajustarNotasReprobados() {
  let notasAjustadas = false;
  for (let i = 0; i < notasEstudiantes.length; i++) {
    if (!estadosAprobacion[i]) { // Si reprobó
      notasEstudiantes[i] += 0.5;
      if (notasEstudiantes[i] > 5.0) {
        notasEstudiantes[i] = 5.0;
      }
      if (notasEstudiantes[i] >= 3.0) {
        estadosAprobacion[i] = true;
      }
      notasAjustadas = true;
    }
  }
  if (notasAjustadas) {
    alert("Se han ajustado las notas de los estudiantes que reprobaron.");
  } else {
    alert("No hay estudiantes reprobados para ajustar sus notas.");
  }
}

function mostrarListadoNotasActualizado() {
  let reporte = "--- Nuevo Listado de Notas Actualizado ---\n";
  if (nombresEstudiantes.length === 0) {
    reporte += "No hay evaluaciones registradas.\n";
  } else {
    for (let i = 0; i < nombresEstudiantes.length; i++) {
      reporte += `Estudiante: ${nombresEstudiantes[i]}, Nueva Nota: ${notasEstudiantes[i].toFixed(1)}, Nuevo Estado: ${estadosAprobacion[i] ? 'Aprobado' : 'Reprobado'}\n`;
    }
  }
  alert(reporte);
}

function iniciarPrograma() {
  let opcion;
  agregarEvaluaciones(); 

  if (nombresEstudiantes.length === 0) {
    alert("No se ingresaron evaluaciones. El programa terminará.");
    return;
  }

  do {
    opcion = prompt(
      "Menú de Opciones\n" +
      "1. Mostrar todas las evaluaciones\n" +
      "2. Contar aprobados y reprobados\n" +
      "3. Calcular promedio de notas aprobadas\n" +
      "4. Calcular promedio general de todas las notas\n" +
      "5. Mostrar primer estudiante que reprobó\n" +
      "6. Crear lista de nombres de estudiantes aprobados\n" +
      "7. Ajustar notas de quienes reprobaron\n" +
      "8. Mostrar nuevo listado de notas actualizado\n" +
      "0. Salir\n\n" +
      "Ingrese el número de la opción deseada:"
    );

    switch (opcion) {
      case "1":
        mostrarTodasLasEvaluaciones();
        break;
      case "2":
        contarAprobadosYReprobados();
        break;
      case "3":
        calcularPromedioNotasAprobadas();
        break;
      case "4":
        calcularPromedioGeneral();
        break;
      case "5":
        mostrarPrimerEstudianteQueReprobo();
        break;
      case "6":
        crearListaNombresAprobados();
        break;
      case "7":
        ajustarNotasReprobados();
        break;
      case "8":
        mostrarListadoNotasActualizado();
        break;
      case "0":
        alert("Saliendo del programa.");
        break;
      default:
        alert("Opción no válida. Por favor, intente de nuevo.");
    }
  } while (opcion !== "0");
}

iniciarPrograma();