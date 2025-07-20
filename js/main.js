const titulos = ["Libro A", "Libro B", "Libro C", "Libro D"];
const dias = [5, 3, 7, 2];
const devueltosATiempo = [true, false, true, false];

function mostrarPrestamos(titulos, dias, devueltosATiempo) {
    for (let i = 0; i < titulos.length; i++) {
        console.log("Título:", titulos[i]);
        console.log("Días prestado:", dias[i]);
        console.log("Devuelto a tiempo:", devueltosATiempo[i] ? "Sí" : "No");
        console.log("---");
    }
}

function contarDevoluciones(devueltosATiempo) {
    let aTiempo = 0;
    let conRetraso = 0;
    for (let i = 0; i < devueltosATiempo.length; i++) {
        if (devueltosATiempo[i]) {
            aTiempo++;
        } else {
            conRetraso++;
        }
    }
    console.log("Devueltos a tiempo:", aTiempo);
    console.log("Con retraso:", conRetraso);
}

function totalDiasATiempo(dias, devueltosATiempo) {
    let total = 0;
    for (let i = 0; i < dias.length; i++) {
        if (devueltosATiempo[i]) {
            total += dias[i];
        }
    }
    console.log("Total días en préstamos devueltos a tiempo:", total);
}

function promedioDias(dias) {
    let suma = 0;
    for (let i = 0; i < dias.length; i++) {
        suma += dias[i];
    }
    let promedio = dias.length > 0 ? suma / dias.length : 0;
    console.log("Promedio general de días por préstamo:", promedio);
}

function primerNoDevueltoATiempo(titulos, devueltosATiempo) {
    for (let i = 0; i < titulos.length; i++) {
        if (!devueltosATiempo[i]) {
            console.log("Primer libro no devuelto a tiempo:", titulos[i]);
            return;
        }
    }
    console.log("Todos los libros fueron devueltos a tiempo.");
}

function listaDevueltosATiempo(titulos, devueltosATiempo) {
    let nuevaLista = [];
    for (let i = 0; i < titulos.length; i++) {
        if (devueltosATiempo[i]) {
            nuevaLista.push(titulos[i]);
        }
    }
    console.log("Títulos devueltos a tiempo:", nuevaLista);
    return nuevaLista;
}

function ajustarDiasPorSancion(dias, devueltosATiempo) {
    for (let i = 0; i < dias.length; i++) {
        if (!devueltosATiempo[i]) {
            dias[i] += 2;
        }
    }
}

function mostrarListaActualizada(titulos, dias, devueltosATiempo) {
    console.log("Lista actualizada:");
    mostrarPrestamos(titulos, dias, devueltosATiempo);
}

mostrarPrestamos(titulos, dias, devueltosATiempo);
contarDevoluciones(devueltosATiempo);
totalDiasATiempo(dias, devueltosATiempo);
promedioDias(dias);
primerNoDevueltoATiempo(titulos, devueltosATiempo);
listaDevueltosATiempo(titulos, devueltosATiempo);
ajustarDiasPorSancion(dias, devueltosATiempo);
mostrarListaActualizada(titulos, dias, devueltosATiempo);
