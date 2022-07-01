/* let edad = 14; */

/* if(edad >= 18){
  permiso = true;
}else{
  permiso = falso;
} */

// condicion ? codigo de condicion verdadera : codigo de condicion falsa
/* let permiso = edad >= 18 ? true : false;
console.log(permiso); */

/* let usuario = {
  nombre: "andres",
  cursos: null
}; 

console.log(usuario?.cursos?.javascript); */

/* let numero1 = 1;
let numero2 = numero1;

numero2 = 8;
console.log(numero1); */

/* let obj1 = {nombre: "andres", edad: 50};
let obj2 = {...obj1};

obj2.nombre = "camila";
console.log(obj1);
console.log(obj2); */

let obj = {
  user_id: 12,
  name_user: "andres"
};

const {
  user_id: id,
  name_user: nombre
} = obj;

console.log(id, nombre);