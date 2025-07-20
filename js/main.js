const inputEntregas = [
  ["Bogotá", 120, "sí"],
  ["Medellín", 320, "no"],
  ["Cali", 200, "sí"],
  ["Barranquilla", 430, "no"],
  ["Cartagena", 150, "sí"]
];


function convertirEntradas(rawData) {
  let entregasConvertidas = [];
  let i = 0;

  while (i < rawData.length) {
    const destino = rawData[i][0];
    const distancia = rawData[i][1];
    const completada = rawData[i][2] === "sí";
    entregasConvertidas[entregasConvertidas.length] = [destino, distancia, completada];
    i++;
  }

  return entregasConvertidas;
}


const entregas = convertirEntradas(inputEntregas);


function mostrarEntregas(listaEntregas) {
  let i = 0;
  while (i < listaEntregas.length) {
    const entrega = listaEntregas[i];
    console.log("Destino: " + entrega[0] + ", Distancia: " + entrega[1] + " km, Completada: " + entrega[2]);
    i++;
  }
}

function contarEntregas(listaEntregas) {
  let completadas = 0;
  let pendientes = 0;
  let i = 0;
  while (i < listaEntregas.length) {
    if (listaEntregas[i][2]) {
      completadas++;
    } else {
      pendientes++;
    }
    i++;
  }
  return [completadas, pendientes];
}

function totalKilometrosCompletados(listaEntregas) {
  let total = 0;
  let i = 0;
  while (i < listaEntregas.length) {
    if (listaEntregas[i][2]) {
      total += listaEntregas[i][1];
    }
    i++;
  }
  return total;
}

function promedioDistancia(listaEntregas) {
  let total = 0;
  let i = 0;
  while (i < listaEntregas.length) {
    total += listaEntregas[i][1];
    i++;
  }
  return total / listaEntregas.length;
}

function primerDestinoPendiente(listaEntregas) {
  let i = 0;
  while (i < listaEntregas.length) {
    if (!listaEntregas[i][2]) {
      return listaEntregas[i][0];
    }
    i++;
  }
  return "Todos los destinos fueron completados";
}

function obtenerSoloCompletadas(listaEntregas) {
  let completadas = [];
  let i = 0;
  while (i < listaEntregas.length) {
    if (listaEntregas[i][2]) {
      completadas[completadas.length] = listaEntregas[i];
    }
    i++;
  }
  return completadas;
}

function aumentarDistanciasPendientes(listaEntregas) {
  let nuevaLista = [];
  let i = 0;
  while (i < listaEntregas.length) {
    let destino = listaEntregas[i][0];
    let distancia = listaEntregas[i][1];
    let completada = listaEntregas[i][2];
    if (!completada) {
      distancia = Math.round(distancia * 1.15 * 100) / 100;
    }
    nuevaLista[nuevaLista.length] = [destino, distancia, completada];
    i++;
  }
  return nuevaLista;
}

function mostrarDistancias(listaEntregas) {
  let i = 0;
  while (i < listaEntregas.length) {
    console.log("Destino: " + listaEntregas[i][0] + ", Distancia: " + listaEntregas[i][1] + " km");
    i++;
  }
}


console.log("1. Todas las entregas:");
mostrarEntregas(entregas);

console.log("\n2. Conteo:");
const conteo = contarEntregas(entregas);
console.log("Completadas: " + conteo[0] + ", Pendientes: " + conteo[1]);

console.log("\n3. Total km completados:");
console.log(totalKilometrosCompletados(entregas) + " km");

console.log("\n4. Promedio distancia:");
console.log(promedioDistancia(entregas).toFixed(2) + " km");

console.log("\n5. Primer destino pendiente:");
console.log(primerDestinoPendiente(entregas));

console.log("\n6. Entregas completadas:");
const completadas = obtenerSoloCompletadas(entregas);
mostrarEntregas(completadas);

console.log("\n7. Aumentar 15% en entregas no completadas:");
const entregasActualizadas = aumentarDistanciasPendientes(entregas);

console.log("\n8. Distancias actualizadas:");
mostrarDistancias(entregasActualizadas);
