/* const array1 = [];
const array2 = [1, 2, 6, 7];
const array3 = ["andres", "camila"];
const array4 = [1, 2, 3, 4, true, "andres", [1,2,4,5]];

console.log(array3[1]); */

/* const numeros = [1, 2, 3];

for (let index = 0; index < numeros.length; index++) {
  const element = numeros[index];
  alert(element);
} */

/* const numeros = [1, 2, 3];
console.log(numeros.length);
//push agrega elementos al final del arreglo
numeros.push("hola");
console.log(numeros.length);

//unshift agrega al inicio de arreglo
numeros.unshift("chao");
console.log(numeros);

//shift saca elementos del principio del arreglo
numeros.shift();
console.log(numeros);

//pop saca elementos del final del arreglo
numeros.pop();
console.log(numeros); */

/* const numeros = [10, 20, 1, 4, 5];
const nombres = ["Jorge", "Mariana"]; */
/*
//ayuda a elminar elementos dentro del arreglo
numeros.splice(1, 2);
console.log(numeros); */
/*
//unir lso elementos del arreglo con un separador
console.log(typeof(numeros.join("*")));
console.log(numeros.join("       ")); */
/* const data = numeros.concat(nombres);
console.log(data); */

/* //slice sirve para hacer copias en cierto rango
const recorte = numeros.slice(1, 4);
console.log(recorte); */

/* const nombres = ["Jorge", "Mariana", "andres"];
//el indexOf me ayuda a encontrar la posición de un elemento
console.log(nombres.indexOf("andres")); */

/* const nombres = ["Jorge", "Mariana", "andres"];
let nombre = prompt("Ingrese el nombre de la persona");

if (nombres.includes(nombre)) {
  alert("Bienvenido");
}else{
  alert("No eres inviado");
} */

/* console.log(nombres.includes("Andres")); */

/* const nombres = ["Jorge", "Mariana", "andres"];
nombres.reverse();
console.log(nombres); */

/* const listaNombres = [];
let cantidad = 5;
//Empleo de do...while para cargar nombres en el array por prompt()
do {
  let entrada = prompt("Ingresar nombre");
  listaNombres.push(entrada.toUpperCase());
  console.log(listaNombres.length);
} while (listaNombres.length != cantidad);
//Concatenamos un nuevo array de dos elementos
const nuevaLista = listaNombres.concat(["ANA", "EMA"]);
//Salida con salto de línea usando join
alert(nuevaLista.join("\n"));
 */

/* const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// recibo el elemento a borrar por parámetro
const eliminar = (nombre) => {
    // busco su índice en el array
    let index = nombres.indexOf(nombre)

     // si existe, o sea es distinto a -1, lo borro con splice
    if (index != -1 ) {
        nombres.splice(index, 1)
    } 
}

eliminar('Ana');
console.log(nombres.length); */

/* const obj1 = {nombre: "andres", edad: 100};
const array = [obj1];
array.push({nombre: "camila", edad: 25});
console.log(array[0].edad); */

const productos = [
  { id: 1, producto: "Arroz", precio: 1003 },
  { id: 2, producto: "Fideo", precio: 1002 },
  { id: 3, producto: "Pan", precio: 1001 },
];

for(const producto of productos){
  console.log(producto.producto);
}