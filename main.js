
let ventas = [
  { producto: "Manzana", cantidad: 10, enPromocion: true },
  { producto: "Banano", cantidad: 5, enPromocion: false },
  { producto: "Pera", cantidad: 8, enPromocion: true },
  { producto: "Uva", cantidad: 3, enPromocion: false },
  { producto: "Mango", cantidad: 6, enPromocion: true }
];

function mostrarVentas() {
  console.log("📋 Productos vendidos:");
  for (let i = 0; i < ventas.length; i++) {
    let v = ventas[i];
    let promo = v.enPromocion ? "Sí" : "No";
    console.log(v.producto + " - " + v.cantidad + " unidades - Promoción: " + promo);
  }
}


function contarPromocion() {
  let enPromo = 0;
  let sinPromo = 0;

  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i].enPromocion) {
      enPromo++;
    } else {
      sinPromo++;
    }
  }

  console.log("✅ En promoción: " + enPromo);
  console.log("❌ Sin promoción: " + sinPromo);
}


function totalUnidadesPromo() {
  let total = 0;

  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i].enPromocion) {
      total += ventas[i].cantidad;
    }
  }

  console.log("🎯 Total unidades en promoción: " + total);
}


function promedioUnidades() {
  let total = 0;

  for (let i = 0; i < ventas.length; i++) {
    total += ventas[i].cantidad;
  }

  let promedio = total / ventas.length;
  console.log("📊 Promedio por producto: " + promedio.toFixed(2));
}


function primerSinPromo() {
  for (let i = 0; i < ventas.length; i++) {
    if (!ventas[i].enPromocion) {
      console.log("🔍 Primer sin promoción: " + ventas[i].producto);
      return;
    }
  }
  console.log("Todos los productos estaban en promoción.");
}


function nombresEnPromocion() {
  console.log("📦 Productos en promoción:");
  for (let i = 0; i < ventas.length; i++) {
    if (ventas[i].enPromocion) {
      console.log("- " + ventas[i].producto);
    }
  }
}


function aumentarSinPromocion() {
  for (let i = 0; i < ventas.length; i++) {
    if (!ventas[i].enPromocion) {
      ventas[i].cantidad += 5;
    }
  }
  console.log("🔧 Se aumentaron 5 unidades a los productos sin promoción.");
}

o
function mostrarActualizado() {
  console.log("📑 Listado actualizado:");
  for (let i = 0; i < ventas.length; i++) {
    let promo = ventas[i].enPromocion ? "Sí" : "No";
    console.log(ventas[i].producto + " - " + ventas[i].cantidad + " unidades - Promoción: " + promo);
  }
}


mostrarVentas();
contarPromocion();
totalUnidadesPromo();
promedioUnidades();
primerSinPromo();
nombresEnPromocion();
aumentarSinPromocion();
mostrarActualizado();