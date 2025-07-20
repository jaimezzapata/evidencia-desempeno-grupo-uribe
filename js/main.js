// Arreglo de nombres
const nombres = ["Ana", "Carlos", "Luis", "Marta", "Jorge"];

// Arreglo de minutos entrenados
const minutosEntrenados = [180, 90, 210, 160, 75];

// Arreglo que dice si cumplió la meta (true o false)
const cumplioMeta = [true, false, true, true, false];

// Muestra todos los registros
function mostrarRegistros() {
for (let i = 0; i < nombres.length; i++) {
    console.log(
    "Usuario: " + nombres[i] +
    ", Minutos: " + minutosEntrenados[i] +
    ", Cumplió meta: " + (cumplioMeta[i] ? "Sí" : "No")
    );
}
}

// Cuenta cuántos si cumplieron y cuántos no
function contarCumplimiento() {
let siCumplieron = 0;
let noCumplieron = 0;

for (let i = 0; i < cumplioMeta.length; i++) {
    if (cumplioMeta[i]) {
    siCumplieron++;
    } else {
    noCumplieron++;
    }
}

console.log("Cumplieron: " + siCumplieron);
console.log("No cumplieron: " + noCumplieron);
}

// Suma los minutos de quienes si cumplieron
function totalMinutosCumplieron() {
let total = 0;

for (let i = 0; i < nombres.length; i++) {
    if (cumplioMeta[i]) {
    total += minutosEntrenados[i];
    }
}

console.log("Total minutos de los que cumplieron: " + total);
}

// Calcula el promedio de todos los minutos
function promedioGeneral() {
let suma = 0;

for (let i = 0; i < minutosEntrenados.length; i++) {
    suma += minutosEntrenados[i];
}

let promedio = suma / minutosEntrenados.length;
console.log("Promedio general: " + promedio.toFixed(2));
}

// Muestra el primer usuario que no cumplió
function primerNoCumplio() {
for (let i = 0; i < nombres.length; i++) {
    if (!cumplioMeta[i]) {
    console.log("Primer que no cumplió: " + nombres[i]);
    return;
    }
}

console.log("Todos cumplieron.");
}

// Lista solo los nombres de los que sí cumplieron
function listarQuienesCumplieron() {
console.log("Los que sí cumplieron:");
for (let i = 0; i < nombres.length; i++) {
    if (cumplioMeta[i]) {
    console.log("- " + nombres[i]);
    }
}
}

// Suma 20 minutos a los que no cumplieron y muestra el total al final
function aumentarMinutosNoCumplieron() {
let sumaTotal = 0;

for (let i = 0; i < minutosEntrenados.length; i++) {
    if (!cumplioMeta[i]) {
    console.log(nombres[i] + " no cumplió. Se le suman 20 minutos.");
    minutosEntrenados[i] += 20;
    }
    sumaTotal += minutosEntrenados[i];
}

console.log("Total de minutos entrenados con ajustes: " + sumaTotal);
}

// Muestra los registros actualizados después del aumento
function mostrarRegistrosActualizados() {
console.log("Registros actualizados:");
mostrarRegistros();
}

// Ejecución del programa
console.log("----- REGISTROS INICIALES -----");
mostrarRegistros();

console.log("\n----- CUMPLIMIENTO -----");
contarCumplimiento();

console.log("\n----- MINUTOS CUMPLIERON -----");
totalMinutosCumplieron();

console.log("\n----- PROMEDIO GENERAL -----");
promedioGeneral();

console.log("\n----- PRIMER NO CUMPLIÓ -----");
primerNoCumplio();

console.log("\n----- LISTA CUMPLIERON -----");
listarQuienesCumplieron();

console.log("\n----- AUMENTAR MINUTOS A QUIENES NO -----");
aumentarMinutosNoCumplieron();

console.log("\n----- REGISTROS ACTUALIZADOS -----");
mostrarRegistrosActualizados();