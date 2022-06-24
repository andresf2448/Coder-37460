/* let productos = [
  {nombre: "Camisa", precio: 1000},
  {nombre: "Pantalon", precio: 2000},
  {nombre: "Zapato", precio: 1500},
  {nombre: "Chancla", precio: 2500}
];

localStorage.setItem("productos", JSON.stringify(productos)); */

/* let data = localStorage.getItem("productos");
console.log(JSON.parse(data)); */

/* let productos = JSON.parse(localStorage.getItem("productos"));
console.log(productos);
let producto = productos.find(elemento => elemento.nombre === "Zapato");
producto.precio = 1300;
console.log(productos); */

/* 
let num1 = 1;
let num2 = num1;

num2 = 4;
console.log(num1); 

|  1  |     |  4   |
  num1        num2
*/

/* 
let persona1 = {nombre: "andres", edad: 37};
let persona2 = persona1;

persona2.nombre = "Camila";
console.log(persona1); 

| {nombre: "camila", edad: 37} |   
      persona1  persona2
*/

function cambioPrecio(nombre, precio) {
  let productos = JSON.parse(localStorage.getItem("productos"));
  let producto = productos.find((elemento) => elemento.nombre === nombre);
  producto.precio = precio;

  localStorage.setItem("productos", JSON.stringify(productos));
}

let nombreProducto = prompt("Ingrese el nombre del producto a cambiar su precio");
let nuevoPrecio = parseInt(prompt("Ingrese el nuevo precio"));

cambioPrecio(nombreProducto, nuevoPrecio);