/* let boton = document.getElementById("btnPrincipal");
let evento = prompt("Ingrese el evento a ejecutar");
boton.addEventListener(evento, () => respuestaClick("andres"));
function respuestaClick(nombre) {
  console.log("Respuesta evento" + nombre);
}
`askjdhgf class="nombre"` */

/* 
ejecuta con tan solo presionar el click sin necesidad de soltarlo

let boton = document.getElementById("btnPrincipal");
boton.addEventListener("mousedown", () => console.log("mousedown")); */

/*
es similar al click pero se ejecuta primero que este
let boton = document.getElementById("btnPrincipal");
boton.addEventListener("mouseup", () => console.log("mouseup")); */

/* 
se ejecuta con solo pasar el mouse por encima
let titulo = document.getElementById("titulo");

let boton = document.getElementById("btnPrincipal");
boton.addEventListener("mouseover", () => {
  titulo.className = "efecto";
  console.log("mouseover");
}); */

/* 
cuando salgo del elemento
let boton = document.getElementById("btnPrincipal");
boton.addEventListener("mouseout", () => console.log("mouseout")); */

/*
cuando camino sobre el elemento
let boton = document.getElementById("btnPrincipal");
boton.addEventListener("mousemove", () => console.log("mousemove")); */

/* let boton = document.getElementById("btnPrincipal");
boton.addEventListener("click", () => console.log("click"));
boton.addEventListener("mousedown", () => console.log("mousedown"));
boton.addEventListener("mouseup", () => console.log("mouseup")); */

/* 
cuando suelto la tecla
let input = document.getElementById("nombre");
input.addEventListener("keyup", () => console.log("keyup"));
*/

/* let titulo = document.getElementById("titulo");
let input = document.getElementById("nombre");
input.addEventListener("keydown", (e) => {
  console.log(e.key);
  if(e.key === "a"){
    titulo.className = "efecto1";
  }

  if(e.key === "s"){
    titulo.className = "efecto2";
  }

  if(e.key === "d"){
    titulo.className = "efecto3";
  }
}); */

/* 
reconoce cuando salgo del elemento en cuestion
let input = document.getElementById("nombre");
input.addEventListener("change", () => console.log("change")); */

//reconoce lo que escribimos en el campo del input
/* let input = document.getElementById("nombre");
input.addEventListener("input", () => {
  if(input.value.length === 5){
    console.log(input.value);
  }
});

const sumar = () => {
  if(input.value.length === 5){
    console.log(input.value);
  }
} */
/* let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", (a) => {
  a.preventDefault();
  console.log("hoila");
}); */

/* let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
  //Cancelamos el comportamiento del evento
  e.preventDefault();
  //Obtenemos el elemento desde el cual se disparó el evento
  let formulario = e.target
  //Obtengo el valor del primero hijo <input type="text">
  console.log(formulario.children[0].value); 
  //Obtengo el valor del segundo hijo <input type="number"> 
  console.log(formulario.children[1].value);
  if(formulario.children[0].value.includes("*")){
    formulario.children[0].value = "";
  }
} */

function crearTienda() {
  let container = document.getElementById("galeria");
  for (const elemento of libros) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<div class="imagen"><img src=${elemento.img}/></div>
                <h3>${elemento.nombre}</h3>
                <h4>$${elemento.precio}</h4>
                <b>${elemento.genero}</b>
                <p>Descripción: ${elemento.descripcion}</p>`;

    container.append(contenedor);
  }
}
crearTienda();
