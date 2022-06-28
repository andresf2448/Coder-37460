/* let numero = 20;
numero = numero + 1;
numeros += 1;
numeros++; */

/* let edad = 12; */

/* if(edad < 18){
  console.log("Tienes menos de 18");
}else{
  console.log("Tienes mas de 18");
} */

// condicion ? codigo en condicion verdadera : codigo en condicion falsa;

/* edad < 14 ? console.log("Tienes menos de 14") : console.log("Tienes mas o igual que 14"); */

/* const usuario = {
  nombre: "Camila",
  edad: 25
}; */

/*
let permiso;

if(usuario.edad >= 18){
  permiso = true;
}else{
  permiso = false;
}

if(permiso){
  console.log("Puedes entrar");
}else{
  console.log("no puedes entrar");
} */

/* const permiso = usuario.edad >= 18 ? true : false;
permiso ? console.log("Puedes entrar") : console.log("no puedes entrar"); */

/* const carrito = []; */

/* if(carrito.length === 0){
  console.log("el carrito está vacío");
} */

/* carrito.length === 0 && console.log("el carrito está vacío"); */

/* const usuario = {
  nombre: "Camila",
  edad: 25
};

const fechaEntrada = usuario.edad >= 18 && new Date();
console.log(fechaEntrada); */

/* 
Operador1 && operador2
Si el operador1 tiene propiedad truthy entonces la operacion devuelve operador2 de lo contrario devuelve operador1
*/

/* 
operador1 || operador2
si operador1 no es falsy entonces la operacion devuelve el operador1 en caso contrario devuelve el operador2
*/

/* console.log( 0 || "Falsy") // Falsy
console.log( 40 || "Falsy") //40
console.log( null || "Falsy") //Falsy
console.log( undefined || "Falsy")  //Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola mundo
console.log( "" || "Falsy")  //Falsy
console.log( NaN || "Falsy") // Falsy
console.log( true || "Falsy")  //true
console.log( false || "Falsy") // Falsy */

/* const usuario = {
  nombre: "Camila",
  edad: 25
};

let usuario1 = null; */
/* console.log(usuario || "Usuario existe"); */
/* console.log(usuario1 || "usuario no existe"); */
/* let carrito;

let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

if(carritoStorage){
  carrito = carritoStorage;
}else{
  carrito = [];
} */

/* let carrito = [
  {nombre: "camisa", precio: 1000}
]

localStorage.setItem("carrito", JSON.stringify(carrito)) */
/* const carrito = JSON.parse(localStorage.getItem("carrito")) && [];
console.log(carrito); */

/* console.log( 0 || "Nullish") //
console.log( 40 ?? "Nullish") 
console.log( null ?? "Nullish")  
console.log( undefined ?? "Nullish")  
console.log( "Hola Mundo" ?? "Nullish")  
console.log( "" ?? "Nullish")  
console.log( NaN ?? "Nullish")  
console.log( true ?? "Nullish")  
console.log( false ?? "Nullish")  */

/* const usuario = {
  edad: 12
};
console.log(usuario?.nombre || "El usuario no existe o no tiene la propiedad buscada") */

/* const usuario = {
  edad: 12,
  nombre: "Juan",
  telefono: {
    fijo: true,
    celular: false
  }
};

console.log(usuario?.telefono?.casa || "No se encuentra la propiedad"); */

/* const usuario = {
  nombre: "Andres",
  edad: 12,
  direccion: "AV",
  telefono: {
    celular: 12341234,
    casa: null,
    trabajo: 345234534
  }
}; */

/* let nombre = usuario.nombre;
let edad = usuario.edad;
let direccion = usuario.direccion; */

/* let { nombre, edad, familia, telefono: {trabajo} } = usuario;
console.log(nombre);
console.log(edad);
console.log(familia);
console.log(trabajo); */

/* const item = {
  item_id: 432,
  product_name: "Some product",
  price_per_unit: 5600
}

const {
  item_id: id,
  product_name: nombre,
  price_per_unit: precio
} = item;

console.log(id);
console.log(nombre);
console.log(precio); */

/* const usuario = {
  nombre: "Juan",
  edad: 12
};

function destructuracion({nombre, edad}){
  console.log(nombre);
  console.log(edad);
}

destructuracion(usuario) */

/* window.addEventListener('click', ({x, y}) => {
  console.log(x, y);
}); */

/* const nombres = ["andres", "camila", "juan", "veronica"];
const [, nombre1, nombre2] = nombres;

console.log(nombre1);
console.log(nombre2); */

/* let persona = {
  nombre: "andres",
  edad: 13
}

let persona1 = {...persona};

persona1.nombre = "German";
console.log(persona);
console.log(persona1); */

/* const nombres = ["andres", "camila", "juan", "veronica"];
const nombres1 = ["andres1", "camila1", "juan1", "veronica1"]; */

/* console.log(nombres.join(" ")); */
/* console.log(...nombres);
console.log(nombres); */
/* const unidos = [...nombres, ...nombres1];
console.log(unidos); */

/* const curso = {
  nombre: "javascript",
  precio: 1
}

const curso1 = {
  ...curso,
  nombre: "react",
  duracion: 2
}

console.log(curso);
console.log(curso1); */

function sumar(...numeros){
  console.log(numeros);
}

sumar(1,2,3,4,5,45,2134,343);