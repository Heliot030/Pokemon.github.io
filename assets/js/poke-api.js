
//url a consumir 
const urlPokemon="https://pokeapi.co/api/v2/pokemon/"

//eleemntos del dom aounto al nodo
const imgPokemon= document.getElementById("img-pokemon")
//console.log(imgPokemon);

const idPokemon= document.getElementById("id-pokemon")
//console.log(idPokemon);

const nombrePokemon= document.getElementById("nombre-pokemon")
//console.log(nombrePokemon);

const listaHabilidades = document.getElementById("lista-habilidades")
//console.log(listaHabilidades);

const listaTipos =  document.getElementById("lista-tipos");
//console.log(listaTipos);

const formulario = document.getElementById("buscador-pokemon")
//console.log(formulario);

//evevntos

formulario.addEventListener("submit",(e)=>{
    e.preventDefault() //detiene evento
    //console.log("botonppp");

    const inputPokemon = document.getElementById("busqueda-pokemon")
    //console.log(inputPokemon.value);
    
   // urlPokemon += inputPokemon.value vuelve a unir y cmbia url

    const nuevaBusqueda = urlPokemon + inputPokemon.value

    //console.log(nuevaBusqueda);
    
    obtenerPokemon(nuevaBusqueda)
    
})





//funciones
async function obtenerPokemon(url){

    //errores try cath

    try{
        const repuesta = await fetch(url)
        const datos = await repuesta.json()
       /*  console.log(datos);
        console.log(datos.forms[0].name);
        console.log(datos.abilities);
        console.log(datos.id);
        console.log(datos.types);
        console.log(datos.sprites.other["official-artwork"].front_default); */
    
        const pokemon ={
            nombre:datos.forms[0].name,
            habilidad:datos.abilities,
            id:datos.id,
            tipos:datos.types,
            imagen:datos.sprites.other["official-artwork"].front_default
    
        }  
        //console.log(pokemon.imagen);
    
    
    
        //imgagne nombre id
        imgPokemon.src = pokemon.imagen;
        idPokemon.textContent= pokemon.id;
        nombrePokemon.textContent = pokemon.nombre;
    
        //habilidades innerhtml mas sensillo //+= agrego al finalel otro elemento
    
        let template = ``
    
        //recorrer habilidades pokemo
        for(let i=0; i<pokemon.habilidad.length; i++){
            
            const nombreHabilidad =pokemon.habilidad[i].ability.name;
            //console.log(nombreHabilidad);
            
            template += `<li class="list-group-item">${nombreHabilidad}</li>
            ` 
        }
    
        listaHabilidades.innerHTML = template
    
        //tipos
    
        //console.log(pokemon.tipos);
    
        //recorre areglo tipos 
        let templateTipos = ""
        pokemon.tipos.forEach((tipo)=>{
            const nombreTipo = tipo.type.name;
            //console.log(nombreTipo);
            
            templateTipos = `<li class="list-group-item">${nombreTipo}</li>`
        })
        listaTipos.innerHTML = templateTipos
    
    //obtenerPokemon(urlPokemon) //por defecto se invocaba
    }catch(e){
        alert("Pokemon no valido");
    }
}