/* function mayorQue(n){
  return m => m > n;
}

let result = mayorQue(5);
console.log(result(4));
 */
/* 
result =  m => m > 5;

*/

/* function operacion(op){
  if(op === "sumar"){
    return (x, y) => x + y;
  }else if(op === "restar"){
    return (x, y) => x - y;
  }
}

let resultSuma = operacion("sumar");
console.log(resultSuma(3,4));

let resultResta = operacion("restar");
console.log(resultResta(3,4)); */

/* function iterador(arr, fn){
  for(const elemento of arr){
    fn(elemento);
  }
}

iterador([1,2,3,4,5,4,3,2,1], console.log) */


/* //el forEach recorre el arraglo similar a un for o un for of
const numeros = [1,2,3,4,5,6];
numeros.forEach(elemento => console.log(elemento)); */

/* const productos = [
  {nombre: "Leche", precio: 1002},
  {nombre: "Pan", precio: 1001},
  {nombre: "Pan dulce", precio: 1001},
  {nombre: "Mate", precio: 1003},
  {nombre: "Pastel", precio: 1004},
]; */

/* 
//encuentra un producto si existe de lo contrario tira undefined
const result = productos.find(elemento => elemento.nombre === "Mate");
console.log(result); */

/*
//filtra todos los productos que coincidan con la busqueda
let busqueda = prompt("Ingrese el producto a buscar");

const result = productos.filter(elemento => elemento.nombre.includes(busqueda));
console.log(result); */

/* const productos = [
  {nombre: "Leche", precio: 1002},
  {nombre: "Pan", precio: 1001},
  {nombre: "Pan dulce", precio: 1001},
  {nombre: "Mate", precio: 1003},
  {nombre: "Pastel", precio: 1004},
];

console.log(productos.some(elemento => elemento.precio === 1005));
const result = productos.filter(elemento => elemento.precio > 1001);
console.log(result); */

/* const productos = [
  {nombre: "Leche", precio: 1002},
  {nombre: "Pan", precio: 1001},
  {nombre: "Pan dulce", precio: 1001},
  {nombre: "Mate", precio: 1003},
  {nombre: "Pastel", precio: 1004},
];

const nombres = productos.map(elemento => elemento.nombre);
console.log(nombres);

const actualizado = productos.map(elemento => {
  return {
    nombre: elemento.nombre,
    precio: elemento.precio + 1000
  }
});

console.log(actualizado); */

/* const numeros = [1,2,3,4,5,6,7];
const result = numeros.reduce((acum, elemento) => acum + elemento + "asdfasdf", 0);
console.log(result); */

/* const miCompra = [
  { nombre: 'Desarrollo Web', precio: 20000 },
  { nombre: 'Javascript', precio: 18750 },
  { nombre: 'ReactJS', precio: 27500 }
]

const total = miCompra.reduce((acc, el) => acc + el.precio, 0)
console.log(total) */

/* const numeros = [ 40, 1, 5, 200 ];
console.log(numeros.sort((a, b) => a - b));  
console.log(numeros.sort((a, b) => b - a)); */

/* console.log(Math.E);
console.log(Math.PI);
console.log(Math.max(1,2,3,4,2,33,4,5));
console.log(Math.min(1,2,3,4,2,33,4,5));
console.log(Math.max(1,2,3,4,2,33,4,5,Infinity));
console.log(Math.min(1,2,3,4,2,33,4,5,-Infinity)); */
/* const PI = Math.PI;

console.log(PI);
console.log(Math.ceil(PI));
console.log(Math.floor(PI));
console.log(Math.round(PI)); */
//console.log(Math.sqrt(9));
//console.log(Math.random() * 10);
//console.log(Date());

/* console.log(new Date(2020, 1, 15)); */

/* const hoy = new Date("June 9, 2022"); */
/* console.log(hoy.getFullYear());
console.log(hoy.getMonth());
console.log(hoy.getDay()); */

/* console.log( hoy.toDateString() ) 
console.log( hoy.toLocaleString() ) 
console.log( hoy.toLocaleDateString() ) 
console.log( hoy.toTimeString() ) */

/* const navidad = new Date("December 25, 2022")
const hoy = new Date("June 9, 2022")

console.log( navidad - hoy )

const milisegundosPorDia = 86400000

console.log( (navidad - hoy ) / milisegundosPorDia) */

const inicio = new Date();

for(let index = 0; index < 1000; index++) {
  console.log("Haciendo tiempo");
}

const final = new Date();
console.log("El proceso tardó: " + (final-inicio) + " milisegundos");
console.log(`El proceso tardó: ${final - inicio} milisegundos`);