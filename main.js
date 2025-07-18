menuOpcion = 0
let entregas =[]
alert("bienvenido al servicio de entregas, por favor complete toda la informacion que le sea solicitada")

while(menuOpcion != 3){
    menuOpcion = Number(prompt("menu de opciones\n\n1. agregar una entrega\n2. mostrar lo relacionado a las entregas\n3.salir"))

    if(menuOpcion == 1){

        let v0=true
        let entrega =[]
        entrega = [prompt("escriba el nombre del destino al que se dirige la entrega"),Number(prompt("escriba la distancia en kilometros que recorre la entrega")),prompt("por favor indique (con un si o un no) si la entrega fue completada")]

        while(v0){
            
            v0=false
           if(entrega[2] !== "si" && entrega[2] !== "no"){
            entrega[2]=prompt("no se reconocio si la entrega fue completada o no, por favor vuelva a indicarlo" + entrega[2])
            v0=true
                
            } 
        }

        if(entrega[2] == "si"){entrega[2] = "completado"}
        if(entrega[2] == "no"){entrega[2] = "no completado"}
        entregas.push(entrega)
        
    }else if(menuOpcion == 2){

        let contador = 1
        let texto_1 = "entregas completadas:"
        let texto_1a=""
        entregas.forEach(entrega => {
            if (contador<5){
                texto_1 += "\n\nestrega numero "+contador+"\n- nombre del punto de llegada: "+entrega[0]+"\n-distancia recorrida: "+entrega[1]+" km\n-estado de la entrega: "+entrega[2]
                contador++
            }else{
                texto_1a += "\n\nestrega numero "+contador+"\n- nombre del punto de llegada: "+entrega[0]+"\n-distancia recorrida: "+entrega[1]+" km\n-estado de la entrega: "+entrega[2]
                contador++
            }
            
        })

        alert(texto_1)
        if(contador>4){
            alert(texto_1a)
        }

        let texto_2 = "cantidad de entregas realizadas: "
        let texto_3 = "\n\ndestinos completados:\n"

        contador = 0
        kmRecorridos = 0
        entregas.forEach(entrega => {
            if(entrega.some(n => n == "completado")){
                contador++
                kmRecorridos += entrega[1]
                texto_3 += "\n- "+entrega[0]
            } 
        })
        texto_2 += contador+"\n\n kilometros recorridos en las entregas realizadas: "+kmRecorridos+"\n\n promedio de km recorridos por entregas completadas: "+(kmRecorridos/contador).toFixed(2)+"\n\n el primer destino que no fue completado fue a: "+entregas.find(n => n[2] == "no completado")[0]+texto_3

        alert(texto_2)

        entregas.forEach(entrega => {
            if(entrega[2] == "no completado"){
                entrega[1] = (entrega[1]*1.15).toFixed(2)
            }
        })
        texto_1 = "entregas completadas:"
        texto_1a = ""
        contador = 1
        entregas.forEach(entrega => {
            if (contador<5){
                texto_1 += "\n\nestrega numero "+contador+"\n- nombre del punto de llegada: "+entrega[0]+"\n-distancia recorrida: "+entrega[1]+" km\n-estado de la entrega: "+entrega[2]
                contador++
            }else{
                texto_1a += "\n\nestrega numero "+contador+"\n- nombre del punto de llegada: "+entrega[0]+"\n-distancia recorrida: "+entrega[1]+" km\n-estado de la entrega: "+entrega[2]
                contador++
            }
            
        })

        alert("registro actualizado\n"+texto_1)
        if(contador>4){
            alert(texto_1a)
        }

        entregas.forEach(entrega => {
            if(entrega[2] == "no completado"){
                entrega[1] = (entrega[1]/1.15).toFixed(2)
            }
        })

        


    }else{}
}