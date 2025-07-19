// ⚠️ Asegúrate de tener "type": "module" en tu package.json si estás usando Node.js

import {
mostrarPrestamos,
devolucionLibros,
cantDiasDevueltos,
promedioDiasPrestados,
primerLibro,
devueltosConTiempo,
aumentoRetraso,
listaActualizada,
} from "./funciones.js";

function mostrarMenu() {
let opcion;
do {
    opcion = parseInt(
prompt(
        `📚 MENÚ DE GESTIÓN DE PRÉSTAMOS 📚\n
1️⃣ Mostrar todos los préstamos, días y estado
2️⃣ Contar cuántos fueron devueltos a tiempo y cuántos no
3️⃣ Calcular el total de días en devoluciones a tiempo
4️⃣ Calcular el promedio de días prestados
5️⃣ Mostrar el primer libro no devuelto a tiempo
6️⃣ Crear una lista de títulos no devueltos a tiempo
7️⃣ Mostrar listado actualizado
8️⃣ Salir\n
Seleccione una opción (1-9):`
)
    );

    if  (opcion==1){
        mostrarPrestamos();
    } else if (opcion == 2) {
        devolucionLibros();
    } else if (opcion == 3) {
        cantDiasDevueltos();
    } else if (opcion == 4){
        promedioDiasPrestados();
    } else if (opcion == 5) {
        primerLibro();
    } else if (opcion == 6) {
        devueltosConTiempo();
    } else if (opcion == 7) {
        listaActualizada();
    } else if (opcion == 8) {
        console.log("👋 Saliendo del programa...");
    } else {
        console.log("❌ Opción inválida. Intente nuevamente.");
    }

} while (opcion !== 8);
}

mostrarMenu();

