
const saludo = "hola mundo";
const datos = [
    {
        nombre: "Heliot",
        apellido: "Efrain"
    },
    {
        nombre: "Heliot",
        apellido: "Efrain"
    },
    {
        nombre: "Heliot",
        apellido: "Efrain"
    }
]
//funcion similar a una peticion
function obtenerDatos() { //esta funcion nos da solo la promesa
    //resolve funcion todo bien
    //reject si no se cumple la promesa
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (false) {

                resolve(datos)
            } else {
                reject("no se pudo!!! ")
            }
        }, 2000)
    })
}

//forma 1
//negativo o positivo sirve el then
//podemos anida mas then

obtenerDatos().then((datos) => {
    console.log(datos);
}).catch((error) => {  //obtinene errores aun resolviendo

    console.log("existe un error en peticion 1");
    console.log(error);
})

//forma 2 forma asincrona -- await asyn
//lleva un async antes de funcion va con await
async function asincrona() {
    try {
        const datos = await obtenerDatos();
        console.log(datos);
    } catch (error) {
        console.log(error);
    }

}
asincrona()