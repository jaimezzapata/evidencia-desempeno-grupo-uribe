
function registroYanalisisDeEntregas() {
    let cantidad = parseInt(prompt("¿Cuántas entregas desea registrar?"));
    let entregas = [];

    informacionDeEntregas(entregas, cantidad);
    registroDeEntregas(entregas, cantidad);
    contarEntregas(entregas, cantidad);
    kilometrosRecorridos(entregas, cantidad);
    promedioDistancia(entregas, cantidad);
    primerDestinoNoCompletado(entregas, cantidad);
    destinosCompletados(entregas, cantidad);
    aumentarDistancia(entregas, cantidad);
    mostrarDistancias(entregas, cantidad);
}


function informacionDeEntregas(entregas, cantidad) {
    let i = 0;
    while (i < cantidad) {
        let destino = prompt("Ingresa el destino de la entrega " + (i + 1));
        let distancia = parseFloat(prompt("Ingresa la distancia en kilómetros al destino " + destino));
        let estado = prompt("¿La entrega fue completada? (Si / No)");

        let completada = false;
        if (estado === "si" || estado === "SI" || estado === "Si" || estado === "sI") {
            completada = true;
        }

        entregas[i] = [destino, distancia, completada];
        i = i + 1;
    }
}

function registroDeEntregas(entregas, cantidad) {
    console.log("Entregas registradas:");
    let i = 0;
    while (i < cantidad) {
        let estado = "Pendiente";
        if (entregas[i][2]) {
            estado = "Completada";
        }
        console.log("* Destino: " + entregas[i][0] + ", Distancia: " + entregas[i][1] + " km, Estado: " + estado);
        i = i + 1;
    }
}

function contarEntregas(entregas, cantidad) {
    let completadas = 0;
    let i = 0;
    while (i < cantidad) {
        if (entregas[i][2]) {
            completadas = completadas + 1;
        }
        i = i + 1;
    }
    let pendientes = cantidad - completadas;
    console.log("Completadas: " + completadas);
    console.log("Pendientes: " + pendientes);
}

function kilometrosRecorridos(entregas, cantidad) {
    let total = 0;
    let i = 0;
    while (i < cantidad) {
        if (entregas[i][2]) {
            total = total + entregas[i][1];
        }
        i = i + 1;
    }
    console.log("Este es el total de Kilómetros recorridos en entregas completadas: " + total + " km");
}

function promedioDistancia(entregas, cantidad) {
    let suma = 0;
    let i = 0;
    while (i < cantidad) {
        suma = suma + entregas[i][1];
        i = i + 1;
    }
    let promedio = suma / cantidad;
    console.log("Este es el promedio de distancia de todas las entregas: " + promedio + " km");
}

function primerDestinoNoCompletado(entregas, cantidad) {
    let i = 0;
    let completado = false;
    while (i < cantidad && !completado) {
        if (!entregas[i][2]) {
            console.log("Este es el primer destino no completado: " + entregas[i][0]);
            completado = true;
        }
        i = i + 1;
    }
    if (!completado) {
        console.log("Todas las entregas fueron completadas con éxito.");
    }
}

function destinosCompletados(entregas, cantidad) {
    console.log("Destinos con entrega completada:");
    let i = 0;
    while (i < cantidad) {
        if (entregas[i][2]) {
            console.log("* " + entregas[i][0]);
        }
        i = i + 1;
    }
}

function aumentarDistancia(entregas, cantidad) {
    let i = 0;
    while (i < cantidad) {
        if (!entregas[i][2]) {
            entregas[i][1] = entregas[i][1] * 115 / 100;
        }
        i = i + 1;
    }
}

function mostrarDistancias(entregas, cantidad) {
    console.log("Distancias actualizadas:");
    let i = 0;
    while (i < cantidad) {
        console.log("* " + entregas[i][0] + ": " + entregas[i][1] + " km");
        i = i + 1;
    }
}

registroYanalisisDeEntregas();