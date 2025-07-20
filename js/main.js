let prestamos = [
{ titulo: "Cien años de soledad", dias: 5, aTiempo: true },
{ titulo: "Don Quijote", dias: 7, aTiempo: true },
{ titulo: "1984", dias: 4, aTiempo: false },
{ titulo: "La Odisea", dias: 6, aTiempo: true }
];

function mostrarPrestamos(lista) {
console.log("=== Lista de Préstamos ===");
lista.forEach(p => {
console.log(`Título: ${p.titulo}, Días: ${p.dias}, Devuelto a tiempo: ${p.aTiempo}`);
});
}

function contarDevoluciones(lista) {
let aTiempo = 0, conRetraso = 0;
lista.forEach(p => {
p.aTiempo ? aTiempo++ : conRetraso++;
});
console.log(`Devueltos a tiempo: ${aTiempo}, Con retraso: ${conRetraso}`);
}

function totalDiasATiempo(lista) {
let total = lista.reduce((sum, p) => p.aTiempo ? sum + p.dias : sum, 0);
console.log(`Total de días en préstamos a tiempo: ${total}`);
}


function promedioDias(lista) {
let totalDias = lista.reduce((sum, p) => sum + p.dias, 0);
let promedio = totalDias / lista.length;
console.log(`Promedio de días por préstamo: ${promedio.toFixed(2)}`);
}

function primerRetraso(lista) {
let libro = lista.find(p => !p.aTiempo);
if (libro) {
console.log(`Primer libro con retraso: ${libro.titulo}`);
} else {
console.log("Todos los libros fueron devueltos a tiempo.");
}
}

function librosATiempo(lista) {
let titulos = lista.filter(p => p.aTiempo).map(p => p.titulo);
console.log("Libros devueltos a tiempo:", titulos);
return titulos;
}

function ajustarRetrasos(lista) {
lista.forEach(p => {
if (!p.aTiempo) {
p.dias += 2;
}
});
}

function mostrarListaActualizada(lista) {
console.log("=== Lista Actualizada ===");
mostrarPrestamos(lista);
}

mostrarPrestamos(prestamos);
contarDevoluciones(prestamos);
totalDiasATiempo(prestamos);
promedioDias(prestamos);
primerRetraso(prestamos);
librosATiempo(prestamos);
ajustarRetrasos(prestamos);
mostrarListaActualizada(prestamos);
