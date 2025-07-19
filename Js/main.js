import { registrarEvaluacion, visualizarRegistros, calculoDeResultados, promedioDeNotasAprobados, calculoPromedioDeNotas, primerEstudianteReprobado, listaEstudiantesAprobados, aumentarNotaReprobados, visualizarNotasActualizadas } from "./funciones.js";



while (true) {
    let opcion = prompt(    "✨ Bienvenido al Gestor Evaluativo De La institución ✨\n\n" +
        "¿Qué deseas realizar?\n" +
        "1️⃣ REGISTRO DE EVALUACIONES\n" +
        "2️⃣ VISUALIZAR REGISTROS DE EVALUACIONES\n" +
        "3️⃣ CALCULAR CUÁNTOS ESTUDIANTES APROBARON Y CUÁNTOS REPROBARON\n" +
        "4️⃣ CALCULAR EL PROMEDIO DE LAS NOTAS APROBADAS.\n" +
        "5️⃣ CALCULAR EL PROMEDIO GENERAL DE TODAS LAS NOTAS.\n" +
        "6️⃣ MOSTRAR EL NOMBRE DEL PRIMER ESTUDIANTE QUE REPROBÓ. .\n" +
        "7️⃣ CREAR UNA LISTA CON LOS NOMBRES DE LOS ESTUDIANTES QUE APROBARON..\n" +
        "8️⃣ AUMENTAR EN 0.5 LA NOTA DE QUIENES REPROBARON (POR AJUSTE DE EVALUACIÓN)..\n" +
        "9️⃣ MOSTRAR EL NUEVO LISTADO DE NOTAS ACTUALIZADO..\n" +
        "🔟 SALIR\n" 
        
    );
    if (opcion === null) {
    console.log("🚪 Operación cancelada por el usuario.");
    break;
    }

    switch (opcion) {
        case "1":
            registrarEvaluacion();
            break;

        case "2":
            visualizarRegistros();
            break;

        case "3":
            calculoDeResultados();
            break;

        case "4":
            promedioDeNotasAprobados();
            break;

        case "5":
            calculoPromedioDeNotas();
            break;

        case "6":
            primerEstudianteReprobado();
            break;

        case "7":
            listaEstudiantesAprobados();
            break;

        case "8":
            aumentarNotaReprobados();
            break;

        case "9":
            visualizarNotasActualizadas();
            break;

        case "10":
            console.log("✨ Gracias por usar el Gestor Evaluativo. ¡Hasta luego! ✨");
            break;                      

        default:
            console.log("❌ Opción inválida. Intenta de nuevo.");
    }

    if (opcion === "10") break;
}

