

//fetch
const url = "https://dog.ceo/api/breeds/image/random"
//respuest peticion
fetch(url).then( (respuesta)=>{
    console.log(respuesta);
})
//obtener informacion
fetch(url)
.then((repuesta)=>repuesta.json()) //se reolvio promesa
.then((datos)=>{ //ahora obtenemos datos
    console.log(datos);
}).catch((error)=>{
    console.log(error);
})

//forma #2
 async function perritosAletorios(){

    try{
    const respuesta = await fetch(url);
    const datos = await respuesta.json()
    console.log(datos);
    }catch(error){
        console.log(error);
    }
    
}

perritosAletorios()