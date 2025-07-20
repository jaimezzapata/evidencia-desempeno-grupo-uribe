export function listadoRegistros(nombres, minutosEntrenados, cumplimientoDeLaMeta) {
    for (let i = 0; i < nombres.length; i++)
      console.log(`Registro ${i + 1} 
        -- Deportista: ${nombres[i]} 
        -- Minutos entrenados: ${minutosEntrenados[i]}min
        -- Cumplimiento de la meta: ${cumplimientoDeLaMeta[i]}`)
  }

  export function contarCumplimientoDeLaMeta(cumplimientoDeLaMeta) {
    let cumplieron = 0;
    let noCumplieron = 0;

    for (let i = 0; i < cumplimientoDeLaMeta.length; i++) {
      if (cumplimientoDeLaMeta[i]) {
        cumplieron++;
      } else {
        noCumplieron++;
      }
    }
    console.log(`Cumplieron la meta: ${cumplieron}`);
    console.log(`No cumplieron la meta: ${noCumplieron}`);
  }

  export function minutosDeQuienesCumplieron ( minutosEntrenados, cumplimientoDeLaMeta){
    let total = minutosEntrenados.reduce(function(acumulador, minutos, i) {
  if (cumplimientoDeLaMeta[i]) {
    return acumulador + minutos;
  } else {
    return acumulador;
  }
}, 0);
console.log(`Total de minutos de quienes cumplieron la meta: ${total}`);
  }

  export function promedioGeneralDeMinutos(minutosEntrenados) {
      let totalMinutos = minutosEntrenados.reduce(function(acumulador, minutos) {
      return acumulador + minutos;
    }, 0);
  
    let promedio = totalMinutos / minutosEntrenados.length;
    console.log(`El promedio general de minutos entrenados es: ${promedio}`);
    }

    export function primerUsuarioQueNoCumplio (cumplimientoDeLaMeta, nombres, minutosEntrenados){
    let primerIncumplido = cumplimientoDeLaMeta.find(function(cumplio, i) {
  if (cumplio === false) {
    console.log(`Primer usuario en no cumplir la meta: ${nombres[i]} con ${minutosEntrenados[i]} minutos entrenados`);
    return true;
  }
})
  }

  export function listaSiCumplieron (nombres, cumplimientoDeLaMeta) {
     let cumplidores = nombres.filter(function(nombre, indice) {
    return cumplimientoDeLaMeta[indice] === true;
  });

  console.log(`Usuarios que cumplieron la meta: ${cumplidores}`);
  }

  export function aumentoDeMinutos (minutosEntrenados, cumplimientoDeLaMeta, nombres) {
    console.log(`Usuarios que NO cumplieron y recibieron +20 minutos:`);

    return minutosEntrenados.map(function(minutos, i) {
      if (!cumplimientoDeLaMeta[i]) {
        console.log(`${nombres[i]}: de ${minutos} a ${minutos + 20} minutos`);
        return minutos + 20;
      }
      return minutos;
    });
  }

  export function nuevosRegistros (nombres, minutosEntrenados, cumplimientoDeLaMeta) {
    console.log("Nuevos registros con minutos actualizados:");
  listadoRegistros(nombres, minutosEntrenados, cumplimientoDeLaMeta);
  }