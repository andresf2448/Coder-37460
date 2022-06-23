/* 
if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar en caso de que la condicion sea falsa
}

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else if(condicion1){
  codigo a ejecutar en caso de que la condicion1 sea verdadera
}else{
  codigo a ejecutar en caso de que las condiciones anteriores sean falsas
}
*/

/* let nombre = prompt("Ingresa tu nombre");

if(nombre === "andres"){
  alert("Hola andres");
}else{
  alert("quién eres?");
} */

/* if(""){
  console.log("entramos al if");
}else{
  console.log("entramos al else");
} */

/* 
bucles for, while, do while
for(let i = 0; i < 100; i++){
  codigo arepetir durante todas las iteraciones
}

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}

do{
  condicion a ejecutar la primera vez y se sigue ejecutando siempre y cuando la condicion sea verdadera
}while(condicion);

NOTA: La diferencia entre el while y el do while es que el while primero piensa y luego
ejecuta, mientras que el do while primero ejecuta y luego piensa
*/
/* let i = 100;

while (i < 100) {
  console.log("hola");
  i++;
}

do{
  console.log("hola");
  i++;
}while(i < 100); */
/* function suma(num1, num2){
  return num1 + num2;
}

let result = suma(10, 39)
alert(result) */

/* const suma = (num1, num2) => num1 + num2;
console.log(suma(20, 5)); */

/* function operaciones(op){
  if(op === "suma"){
    return (num1, num2) => num1 + num2;
  }

  if(op === "resta"){
    return (num1, num2) => num1 - num2;
  }
}

let suma = operaciones("suma");

console.log(suma(1,2)); */

/* function Persona(nombre, edad, direccion){
  this.nombre = nombre;
  this.edad = edad;
  this.direccion = direccion;
  this.hablar = function() {console.log("hola soy ", this.nombre)};
} */

/* class Persona {
  constructor(nombre, edad, direccion) {
    this.nombre = nombre;
    this.edad = edad;
    this.direccion = direccion;
  }

  hablar(){
    console.log(`Hola soy ${this.nombre}`);
  }
}

let persona1 = new Persona("andres", 14, "AV");
console.log(persona1.hablar()); */

/* let nombre = "camila";

console.log(`hola soy ${nombre}`); */

let productos = [
  { id: 1, nombre: "Camisa", precio: 1005 },
  { id: 2, nombre: "Pantalon", precio: 1010 },
  { id: 3, nombre: "Gorra", precio: 1015 },
  { id: 4, nombre: "Media", precio: 1020 },
  { id: 5, nombre: "Zapato", precio: 1025 },
];

let filtro = parseInt(prompt("ingrese el valor minimo"));
/* let nombres = productos.map(elemento => elemento.nombre);
console.log(nombres); */

/* let producto = productos.find(elemento => elemento.nombre === "Camisa");
console.log(producto); */

/* let filtrados = productos.filter(elemento => elemento.precio > filtro);

filtrados.forEach(elemento => {
  let div = document.createElement("div");
  div.innerHTML = `id:"${elemento.id}
                   nombre: ${elemento.nombre}
                   precio: ${elemento.precio}`
  
  div.className = "colores";
  contenddor(id="casa").append(div);
}) */

/* let persona = {
  nombre: "andres",
  edad: 50
};

localStorage.setItem("persona", JSON.stringify(persona))
let recuperado = JSON.parse(localStorage.getItem("persona")); */

//funcion para sumar dos numeros
function suma(num1, num2){
  return num1 + num2;
}

