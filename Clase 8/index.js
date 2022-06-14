/* let div = document.getElementById("container");
console.log(div.innerHTML);
console.log(div.innerText);
let parrafo = document.getElementById("parrafo"); */
//console.log(parrafo);
/* 
let perritos = document.getElementsByClassName("perritos");

console.log(perritos[2].innerHTML); */

/* let divs = document.getElementsByTagName("div");
console.log(divs[1].innerHTML); */

/* let saludo = document.getElementById("saludo");
saludo.innerHTML = "<div class="container"><div>hola a todos</div></div>" */

/* let numero1 = 2;
let numero2 = numero1;

numero2 = 5;

console.log(numero1);

|   2  |     |   5  | 
numero1       numero2 */

/* let persona1 = {nombre: "andres", edad: 12};
let persona2 = persona1;

persona2.nombre = "camila";
console.log(persona1);

|  {nombre: "camila", edad: 12}  |
      persona1  persona2 */

/* let contenedor = document.getElementById("contenedor");
let color = prompt("Quieres color?");

if(color === "si"){
  contenedor.className = "container";
} */

/* let parrafo = document.createElement("p");
let seccion = prompt("ingrese si quiere al inicio o al carrito");

if(seccion === "inicio"){
  parrafo.innerHTML = "<h1>Estamos en el inicio de la pagina</h1>"
}else if(seccion === "carrito"){
  parrafo.innerHTML = "<h1>Estamos en el carrito</h1>"
}else{
  parrafo.innerHTML = "<h1>Título de la página</h1>"
}

document.body.append(parrafo); */

/* let productos = document.getElementById("container");
productos.remove(); */

/* document.getElementById("nombre").value = "Mariano";
document.getElementById("edad").value = 23; */

/* let nombre = prompt("Ingrese una persona")
let padre = document.getElementById("padre");
let personas = ["Santi", "Joaquin", "Mariano"];
personas.push(nombre)

for(const persona of personas){
  let li = document.createElement("li");
  li.innerHTML = persona;
  padre.append(li);
} */

/* const productos = [
  {id: 1, nombre: "Camisa", precio: 1001},
  {id: 2, nombre: "Pantalon", precio: 1002},
  {id: 3, nombre: "Gorra", precio: 1003},
  {id: 4, nombre: "Saco", precio: 1004},
  {id: 5, nombre: "Saco1", precio: 1004},
];
let padre = document.getElementById("padre");

for(const producto of productos){
  let contenedor = document.createElement("div");

  contenedor.innerHTML = `<h2>ID: ${producto.id}</h2>
                    <p>Producto: ${producto.nombre}</p>
                    <b>$ ${producto.precio}</b>`;
  
  padre.append(contenedor);
} */

/* let parrafo = document.querySelector("#contenedor p")
console.log(parrafo); */
/* let parrafo = document.querySelectorAll("#contenedor p")
console.log(parrafo); */

