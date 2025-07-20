
let nombres = [];
let minutos = [];
let cumplioMeta = [];


function registrarUsuarios(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt(`Ingrese el nombre del usuario #${i + 1}:`);
        let tiempo = Number(prompt(`Ingrese los minutos entrenados por ${nombre}:`));
        let cumplio = prompt(`¿${nombre} cumplió su meta semanal? (si/no):`).toLowerCase() === "si";

        nombresUsuario.push(nombre);
        minutosUsuario.push(tiempo);
        cumplioMeta.push(cumplio);
    }
}


function mostrarRegistros() {
    console.log("=== Registros de Entrenamiento ===");
    for (let i = 0; i < nombres.length; i++) {
        console.log(`Usuario: ${nombres[i]}, Minutos: ${minutos[i]}, Cumplió Meta: ${cumplioMeta[i] ? "Sí" : "No"}`);
    }
}


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
    console.log(`Cumplieron la meta: ${siCumplieron}`);
    console.log(`No cumplieron la meta: ${noCumplieron}`);
}


function totalMinutosCumplieron() {
    let total = 0;
    for (let i = 0; i < minutos.length; i++) {
        if (cumplioMeta[i]) {
            total += minutos[i];
        }
    }
    console.log(`Total de minutos de quienes cumplieron la meta: ${total}`);
}


function promedioMinutos() {
    let suma = 0;
    for (let i = 0; i < minutos.length; i++) {
        suma += minutos[i];
    }
    let promedio = suma / minutos.length;
    console.log(`Promedio general de minutos entrenados: ${promedio.toFixed(2)}`);
}

function primerNoCumplio() {
    for (let i = 0; i < cumplioMeta.length; i++) {
        if (!cumplioMeta[i]) {
            console.log(`El primer usuario que no cumplió la meta es: ${nombres[i]}`);
            return;
        }
    }
    console.log("Todos los usuarios cumplieron la meta.");
}

function listarCumplieron() {
    console.log("=== Usuarios que cumplieron la meta ===");
    for (let i = 0; i < nombres.length; i++) {
        if (cumplioMeta[i]) {
            console.log(nombres[i]);
        }
    }
}

function minutosNoCumplieron() {
    for (let i = 0; i < minutos.length; i++) {
        if (!cumplioMeta[i]) {
            minutos[i] += 20;
        }
    }
}


let cantidadRegistros = Number(prompt("¿Cuántos registros desea ingresar?"));
registrarUsuarios(cantidadRegistros);

mostrarRegistros();
contarCumplimiento();
totalMinutosCumplieron();
promedioMinutos();
primerNoCumplio();
listarCumplieron();

minutosNoCumplieron();
console.log("\n=== Registros después de aumentar minutos ===");
mostrarRegistros();
