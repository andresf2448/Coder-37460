//while mientras que sea diferente la entrada de ESC
//pedir nombre
//agregar el nombre al arreglo
//recorrer el arreglo y mostrar una alerta
/* let productos = [
  {nombre: "Arroz", precio: 123},
  {nombre: "Pan", precio: 1233},
  {nombre: "Harina", precio: 1263},
  {nombre: "Lecha", precio: 23},
  {nombre: "Cafe", precio: 123234},
];

let nombres = productos.map(elemento => elemento.nombre);
console.log(nombres);

let precios = productos.map(elemento => elemento.precio);
console.log(precios);

let producto = productos.find(el => el.nombre === "Pan");
console.log(producto.nombre);

let filtrados = productos.filter(el => el.precio < 1263);
console.log(filtrados); */
/* function encontrar(precio){
  let precio = prompt("ingresa el precio límite superior");
  let filtrados = productos.filter(el => el.precio < precio);

  return filtrados;
}

let productos = [
  {nombre: "Arroz", precio: 123},
  {nombre: "Pan", precio: 1233},
  {nombre: "Harina", precio: 1263},
  {nombre: "Lecha", precio: 23},
  {nombre: "Cafe", precio: 123234},
];
 */
function saludo(nombre){
  let saludoCompleto = `hola ${nombre}`;
  alert(saludoCompleto);
}

let nombre = prompt("ingresa el nombre");
saludo(nombre)