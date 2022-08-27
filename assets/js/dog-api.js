//forma 2
//urls para comsumir
const urlAleatorios="https://dog.ceo/api/breeds/image/random"
/* Elementos del DOM */
const imagenPerrito =document.getElementById("img-perrito");

const btn =document.getElementById("btn-perr");

console.log(btn);

/* Eventos */

btn.addEventListener("click",()=>{
 console.log("Boron presionado");
 obtenerPerritoAletoriio(urlAleatorios)
})

async function obtenerPerritoAletoriio(url) {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos);
    console.log(datos.message);
    console.log(datos.status);

    imagenPerrito.src= datos.message
}
/* obtenerPerritoAletoriio(urlAleatorios) */
