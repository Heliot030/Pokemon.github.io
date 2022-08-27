//url para consumir api
const urlCats = "https://api.thecatapi.com/v1/images/search"
//console.log(urlCats);

//es el elmemnto del dom
//boton
const btn = document.getElementById("btn-cat");

//console.log(btn);
//dom ahora va la imagen
const imagenCats = document.getElementById("img-cat")
 

console.log(urlCats);
//eventos
btn.addEventListener("click", () => {
    console.log("Boton de cat");
    obtenerPerritoAletoriio(urlCats)
})

async function obtenerPerritoAletoriio(url) {
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    console.log(datos);
    console.log(datos[0].id);
    //console.log(datos.status); 

    imagenCats.src= datos[0].id
}