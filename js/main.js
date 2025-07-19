let destinos = [];
let kilometros = [];
let entregasCompletadas = [];
let totalEntregas = [prompt("¿Cuántas entregas desea registrar?")];

for (let i = 0; i < totalEntregas; i++) {
  let destino = prompt("Ingrese el nombre del destino #" + (i + 1) + ":");
  let kmTexto = prompt("Ingrese los kilómetros recorridos hacia " + destino + ":");
  let completadoTexto = prompt("¿La entrega fue completada? (si/no):");

  if (destino === null || kmTexto === null || completadoTexto === null ||
    destino.trim() === "" || kmTexto.trim() === "" || completadoTexto.trim() === "") {
    console.log(" Error: Todos los campos deben estar diligenciados.");
  } else {
    let km = parseFloat(kmTexto);
    let completada = completadoTexto.toLowerCase() === "si";

    if (isNaN(km) || km <= 0) {
      console.log(" Error: La distancia debe ser un número positivo.");
    } else {
      destinos.push(destino);
      kilometros.push(km);
      entregasCompletadas.push(completada);
    }
  }
}

console.log("************ REPORTE DE ENTREGAS ************");

let completadas = 0;
let pendientes = 0;
let kmCompletados = 0;
let sumaKm = 0;
let primerPendiente = null;

for (let i = 0; i < destinos.length; i++) {
  let estadoTexto = entregasCompletadas[i] ? "Completada" : "Pendiente";
  console.log("- Destino: " + destinos[i] +
    ", Kilómetros: " + kilometros[i] +
    ", Estado: " + estadoTexto);

  sumaKm += kilometros[i];

  if (entregasCompletadas[i]) {
    completadas++;
    kmCompletados += kilometros[i];
  } else {
    pendientes++;
    if (primerPendiente === null) {
      primerPendiente = destinos[i];
    }
  }
}


let promedioKm = sumaKm / destinos.length;

// LISTADO DE COMPLETADOS
let destinosCompletados = [];
for (let i = 0; i < destinos.length; i++) {
  if (entregasCompletadas[i]) {
    destinosCompletados.push(destinos[i]);
  }
}

// AUMENTAR 15% A PENDIENTES
for (let i = 0; i < destinos.length; i++) {
  if (!entregasCompletadas[i]) {
    kilometros[i] *= 1.15;
  }
}


console.log("\n Entregas completadas: " + completadas);
console.log(" Entregas pendientes: " + pendientes);
console.log(" Kilómetros recorridos en entregas completadas: " + kmCompletados);
console.log(" Promedio de kilómetros: " + promedioKm.toFixed(2));
console.log(" Primer destino pendiente: " + (primerPendiente || "Ninguno"));
console.log(" Destinos completados: " + (destinosCompletados.length > 0 ? destinosCompletados.join(", ") : "Ninguno"));

console.log("\n ********LISTADO ACTUALIZADO DE DESTINOS********");
console.log("Se aumentó un 15% a las distancias de las entregas pendientes:");
for (let i = 0; i < destinos.length; i++) {
  let estado = entregasCompletadas[i] ? "Completada" : "Pendiente";
  console.log("- Destino: " + destinos[i] +
    ", Nueva distancia: " + kilometros[i].toFixed(2) +
    ", Estado: " + estado);
}
