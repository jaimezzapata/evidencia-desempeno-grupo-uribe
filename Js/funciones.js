
export let estudiantes = [];


export function registrarEvaluacion() {
    while (true) {
        let nombre = prompt("📚 Ingresa el nombre del estudiante:");

        if (!nombre || nombre.trim() === "") {
            console.log("❌ Nombre no válido.");
            continue; // vuelve a pedir el nombre
        }

        let nota = parseFloat(prompt("✍️ Ingresa la nota obtenida (0.0 a 5.0):"));

        if (isNaN(nota) || nota < 0 || nota > 5) {
            console.log("❌ Nota inválida. Debe estar entre 0.0 y 5.0");
            continue; // vuelve a pedir los datos
        }

        let aprobado = nota >= 3.0;

        let estudiante = {
            nombre: nombre.trim(),
            nota: nota,
            aprobado: aprobado
        };

            estudiantes.push(estudiante);

            console.log(`✅ Registro exitoso: ${estudiante.nombre} (${estudiante.nota}) - ${aprobado ? "Aprobado" : "Reprobado"}`);
            let continuar = prompt("¿Deseas registrar otro estudiante? (s/n):").toLowerCase();

            if (continuar !== "s") {
            console.log("🔙 Volviendo al menú principal...");
            break;
        }
    }
}

export function visualizarRegistros  (){
        if  (estudiantes.length === 0) {
                console.log("⚠️ No hay estudiantes registrados aún.");
                return;
        }

            console.log("📋 Listado de Evaluaciones Registradas:");
            console.log("----------------------------------------");

            estudiantes.forEach((estudiante, index) => {
                console.log(
                    `${index + 1}. 🧑‍🎓 ${estudiante.nombre} | Nota: ${estudiante.nota} | ${estudiante.aprobado ? "✅ Aprobado" : "❌ Reprobado"}`
                );
       });

            console.log("----------------------------------------");
            console.log(`🧮 Total de estudiantes: ${estudiantes.length}`);
}

export function calculoDeResultados (){
            console.log("***** CALCULOS DE REULTADOS******");
            let aprobados = 0;
            let reprobados = 0;

            if (estudiantes.length === 0) {
            console.log("⚠️ No hay registros para evaluar.");
            return;
        }

            estudiantes.forEach(estudiante => {
            if (estudiante.aprobado) {
                aprobados++;
        }   else {
                reprobados++;
        }
        });

            console.log("📊 Resultados Generales:");
            console.log("----------------------------");
            console.log(`✅ Estudiantes que aprobaron: ${aprobados}`);
            console.log(`❌ Estudiantes que reprobaron: ${reprobados}`);
            console.log(`📦 Total de estudiantes evaluados: ${estudiantes.length}`); 
    }

export function promedioDeNotasAprobados (){
            console.log("***** CALCULO DE PROMEDIO DE NOTAS DE APROBADOS******");
                
                if (estudiantes.length === 0) {
                console.log("⚠️ No hay estudiantes registrados.");
                return;
        }

            let aprobados = estudiantes.filter(est => est.aprobado);
            if (aprobados.length === 0) {
                console.log("📉 Ningún estudiante aprobó, no hay promedio que calcular.");
                return;
        }

            let suma = 0;
            aprobados.forEach(est => {
                suma += est.nota;
        });

            let promedio = suma / aprobados.length;

            console.log("📈 Promedio de notas de estudiantes aprobados:");
            console.log(`✅ Total aprobados: ${aprobados.length}`);
            console.log(`🧮 Promedio: ${promedio.toFixed(2)}`);
}

export function calculoPromedioDeNotas (){
            console.log("***** CALCULO DE PROMEDIO DE RESULTADOS******");
            let sumaTotal = 0;

            if (estudiantes.length === 0) {
                console.log("⚠️ No hay estudiantes registrados.");
                return;
        }

            estudiantes.forEach(est => {
                sumaTotal += est.nota;
        });

            let promedioGeneral = sumaTotal / estudiantes.length;

            console.log("📊 Promedio General de todas las notas:");
            console.log(`🧮 Total estudiantes: ${estudiantes.length}`);
            console.log(`📈 Promedio general: ${promedioGeneral.toFixed(2)}`);
}

export function primerEstudianteReprobado (){
            console.log("***** MOSTRANDO EL NOMBRE DEL PRIMER ESTUDIANTE QUE REPROBÓ******");
            if (estudiantes.length === 0) {
            console.log("⚠️ No hay estudiantes registrados.");
            return;
        }

        const reprobado = estudiantes.find(est => !est.aprobado);

        if (reprobado) {
            console.log("🔍 Primer estudiante que reprobó:");
            console.log(`❌ Nombre: ${reprobado.nombre} | Nota: ${reprobado.nota}`);
        } else {
            console.log("✅ Todos los estudiantes aprobaron. ¡Felicidades!");
        }

}

export function listaEstudiantesAprobados () {
            console.log("***** LISTA CON LOS NOMBRES DE LOS ESTUDIANTES QUE APROBARON ******");

            if (estudiantes.length === 0) {
                console.log("⚠️ No hay estudiantes registrados.");
                return;
        }  

            const aprobados = estudiantes.filter(est => est.aprobado);

            if (aprobados.length === 0) {
                console.log("📉 Ningún estudiante aprobó.");
                return;
        }

            console.log("📋 Lista de estudiantes que aprobaron:");
            aprobados.forEach((est, index) => {
                console.log(`${index + 1}. 🧑‍🎓 ${est.nombre} | Nota: ${est.nota}`);
        });
}
export function aumentarNotaReprobados (){
        console.log("***** AUMENTANDO EN 0.5 LA NOTA DE QUIENES REPROBARON******");
            if (estudiantes.length === 0) {
                console.log("⚠️ No hay estudiantes registrados.");
                return;
        }

            let actualizados = 0;

            estudiantes.forEach(est => {
                if (!est.aprobado) {
                    est.nota = Math.min(est.nota + 0.5, 5.0);
                    est.aprobado = est.nota >= 3.0;

                    actualizados++;
        }
        });

            if (actualizados === 0) {
                console.log("✅ Todos los estudiantes ya habían aprobado. No se realizaron ajustes.");
            } else {
                console.log(`🔧 Se actualizaron las notas de ${actualizados} estudiante(s) que habían reprobado.`);
                console.log("✔️ Se volvió a calcular si aprobaron tras el ajuste.");
            }
}

export function visualizarNotasActualizadas (){
            console.log("***** MOSTRANDO EL NUEVO LISTADO DE NOTAS ACTUALIZADO******");
                if (estudiantes.length === 0) {
            console.log("⚠️ No hay estudiantes registrados.");
            return;
        }

        console.log("📋 LISTADO ACTUALIZADO DE NOTAS:");

        estudiantes.forEach((est, index) => {
            console.log(
                `${index + 1}. 🧑‍🎓 ${est.nombre} | Nota: ${est.nota.toFixed(2)} | ${est.aprobado ? "✅ Aprobado" : "❌ Reprobado"}`
            );
        });
}
