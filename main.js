let clientes = [];
let valores = [];
let pagados = []; 

function ingresarPedidos() { 
    let cantidad = parseInt(prompt("Cantidad de pedidos a ingresar"))
    for (let i = 0; i < cantidad; i++) {
        let nombre = prompt(`Digite el nombre del cliente #${i + 1}:`)
        let valor = parseFloat(prompt(`Digite el valor del pedido ${nombre}:`))
        let pagadoTexto = prompt(`¿El pedido de ${nombre} fue pagado? (si / no):`).toLowerCase()
        let pagado = (pagadoTexto === "sí" || pagadoTexto === "si")

        clientes.push(nombre)
        valores.push(valor)
        pagados.push(pagado)
    
    }
}

function mostrarPedidos() {
    console.log("=== Pedidos del dia ===")
    for (let i = 0; i < clientes.length; i++) {
        let estado = pagados[i] ? "Pagado" : "Pendiente"
        
        console.log(`${clientes[i]} - $${valores[i]} - ${estado}`)
    
    }
}

function contarPedidos() {
let pagadosContador = 0
let pendientesContador = 0
for (let i = 0; i < pagados.length; i++) {
    if (pagados[i]) {
        pagadosContador++
        } else {
        pendientesContador++
        }
    }
    console.log(`Pedidos pagados: ${pagadosContador}`)
    console.log(`Pedidos pendientes: ${pendientesContador}`)
}

function totalRecaudado() {
let total = 0
for (let i = 0; i < valores.length; i++) {
    if (pagados[i]) {
        total += valores[i]
        }
    }
    console.log(`Total generado con los pedidos: $${total}`)
}

function promedioPedidos() {
    let suma = 0
    for (let i = 0; i < valores.length; i++) {
        suma += valores[i]
    }
    let promedio = suma / valores.length
    console.log(`Promedio de valor de los pedidos: $${promedio.toFixed(2)}`)
}

function primerPendiente() {
    for (let i = 0; i < pagados.length; i++) {
        if (!pagados[i]) {
            console.log(`Primer cliente con pedido pendiente: ${clientes[i]}`)
            return
        }
    }
    console.log("Todos los pedidos estan pagados.")
}

function clientesPagaron() {
    let lista = []
    for (let i = 0; i < clientes.length; i++) {
        if (pagados[i]) {
            lista.push(clientes[i])
        }
    }
    console.log("Clientes que han pagado:")
    for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }
}

function aplicarRecargo() {
    for (let i = 0; i < valores.length; i++) {
        if (!pagados[i]) {
            valores[i] = valores[i] * 1.10
        }
    }
}

function mostrarPedidosActualizados(){
    for (let i = 0; i < clientes.length; i++){
        let estado = pagados [i] ? "Pago realizado" : "Pago pendiente"
        console.log(`${clientes[i]} - $${valores[i].toFixed(2)} - ${estado}`)
    }
}

ingresarPedidos()
mostrarPedidos()
console.log("\n--- Resumen ---")
contarPedidos()
totalRecaudado()
promedioPedidos()
primerPendiente()
clientesPagaron()

console.log("\n--- Aplicando recargos ---")
aplicarRecargo()
mostrarPedidosActualizados()
{}[]