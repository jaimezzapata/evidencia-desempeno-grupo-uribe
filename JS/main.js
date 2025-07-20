import { listadoRegistros, contarCumplimientoDeLaMeta, minutosDeQuienesCumplieron, promedioGeneralDeMinutos, primerUsuarioQueNoCumplio, listaSiCumplieron, aumentoDeMinutos, nuevosRegistros } from "./funcionesMain.js"
let nombres = [
  "Ana Pérez",
  "Luis Gómez",
  "Carla Ruiz",
  "Jorge Medina",
  "Tatiana López",
  "Santiago Ríos",
  "Laura Torres",
  "Camilo Herrera",
  "Marcela Díaz",
  "Andrés Salazar"
]

let minutosEntrenados = [
  50,
  30,
  60,
  45,
  20,
  80,
  38,
  55,
  42,
  47
]

let cumplimientoDeLaMeta = [
  true,   // Ana Pérez
  false,  // Luis Gómez
  true,   // Carla Ruiz
  true,   // Jorge Medina
  false,  // Tatiana López
  true,   // Santiago Ríos
  false,  // Laura Torres
  true,   // Camilo Herrera
  false,  // Marcela Díaz
  true    // Andrés Salazar
]

let opciones = Number(prompt(`1. Mostrar todos los registros, minutos y estado.  
2. Contar cuántos cumplieron la meta y cuántos no.  
3. Calcular el total de minutos de quienes cumplieron.  
4. Calcular el promedio general de minutos.  
5. Mostrar el primer usuario que no cumplió la meta.  
6. Crear una lista con quienes sí cumplieron.  
7. Aumentar 20 minutos a quienes no cumplieron.  
8. Mostrar los nuevos registros.`))

if (opciones == 1) {//1. Mostrar todos los registros, minutos y estado. 

  listadoRegistros(nombres, minutosEntrenados, cumplimientoDeLaMeta)

} else if (opciones == 2) {//2. Contar cuántos cumplieron la meta y cuántos no.
  contarCumplimientoDeLaMeta(cumplimientoDeLaMeta)

} else if (opciones == 3) {//3. Calcular el total de minutos de quienes cumplieron. 
  minutosDeQuienesCumplieron(minutosEntrenados, cumplimientoDeLaMeta)

} else if (opciones == 4) {//4. Calcular el promedio general de minutos.

  promedioGeneralDeMinutos(minutosEntrenados)

} else if (opciones == 5) {//5. Mostrar el primer usuario que no cumplió la meta.
  primerUsuarioQueNoCumplio(cumplimientoDeLaMeta, nombres, minutosEntrenados)

} else if (opciones == 6) {//6. Crear una lista con quienes sí cumplieron. 
  listaSiCumplieron(nombres, cumplimientoDeLaMeta)

} else if (opciones == 7) {//7. Aumentar 20 minutos a quienes no cumplieron.
minutosEntrenados = aumentoDeMinutos(minutosEntrenados, cumplimientoDeLaMeta, nombres);

} else if (opciones == 8) {//8. Mostrar los nuevos registros.
  
  nuevosRegistros(nombres, minutosEntrenados, cumplimientoDeLaMeta)

}
