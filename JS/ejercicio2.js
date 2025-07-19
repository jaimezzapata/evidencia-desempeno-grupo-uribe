let productos = ["Manzana", "Banano", "Pera", "Uva", "Sandía"];
let cantidades = [10, 5, 8, 12, 4];
let enPromocion = [true, false, true, false, true];

function mostrarVentas() {
    console.log("1. Productos vendidos: ");
    for (let i = 0; i < productos.length; i++) {
        if (enPromocion[i]) {
            console.log(productos[i] + ": " + cantidades[i] + " unidades - En promoción");
        } else {
            console.log(productos[i] + ": " + cantidades[i] + " unidades - Sin promoción");
        }
    }
}

function contarPromociones() {
    let enPromo = 0;
    let noPromo = 0;

    for (let i = 0; i < enPromocion.length; i++) {
        if (enPromocion[i]) {
            enPromo++;
        }else {
            noPromo++;
        }
    }

    console.log("2. En promoción: " + enPromo);
    console.log("   Sin promoción: " + noPromo);
}

function totalUnidadesEnPromocion() {
    let total = 0;

    for (let i = 0; i < cantidades.length; i++) {
        if (enPromocion[i]) {
            total = total + cantidades[i];
        }
    }

    console.log("3. Total de unidades en promoción: " + total);
}

function promedioUnidades() {
    let suma = 0;

    for (let i = 0; i < cantidades.length; i++) {
        suma = suma + cantidades[i];
    }

    let promedio = suma / cantidades.length;
    console.log("4. Promedio por producto: " + promedio);
}


function primerNoPromo() {
    for (let i = 0; i < productos.length; i++) {
        if (enPromocion[i] == false) {
            console.log("5. Primer producto sin promoción: " + productos[i]);
            break;
        }
    }
}

function nombresEnPromocion() {
    console.log("6. Productos en promoción:");
    for (let i = 0; i < productos.length; i++) {
        if (enPromocion[i] == true) {
            console.log("-" + productos[i]);
        }
    }
}

function aumentarNoPromos() {
    console.log("7. Aumentar en 5 unidades a productos sin promoción:");
    for (let i = 0; i < cantidades.length; i++) {
        if (enPromocion[i] == false) {
            let cantidadAnterior = cantidades[i];
            cantidades[i] = cantidades[i] + 5;
            console.log("-" + productos[i] + ": de " + cantidadAnterior + " a " + cantidades[i]);
        }
    }
}

function mostrarActualizado() {
    console.log("8. Listado actualizado con cantidades:");
    for (let i = 0; i < productos.length; i++) {
        console.log(productos[i] + ": " + cantidades[i] + " unidades");
    }
}

mostrarVentas();
contarPromociones();
totalUnidadesEnPromocion();
promedioUnidades();
primerNoPromo();
nombresEnPromocion();
aumentarNoPromos();
mostrarActualizado();
