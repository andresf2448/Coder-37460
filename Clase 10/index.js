/* sessionStorage.setItem("nombre", "mariana"); */
/* for (let index = 0; index < localStorage.length; index++) {
  let clave = localStorage.key(index);

  console.log("clave", clave);
  console.log("valor", localStorage.getItem(clave));
}

localStorage.removeItem("nombre"); */
/* localStorage.setItem("objetico", JSON.stringify({nombre: "mariana", edad: 12})); */
/* let objetico = JSON.parse(localStorage.getItem("objetico"));
console.log(objetico); */

/* const productos = [
  { id: 1, nombre: "Pan", precio: 1000 },
  { id: 2, nombre: "Arroz", precio: 1000 },
  { id: 3, nombre: "Fideo", precio: 1000 },
];

const guardar = (clave, valor) => { localStorage.setItem(clave, valor); };

for(const producto of productos){
  guardar(producto.id, JSON.stringify(producto));
}

localStorage.setItem("productos", JSON.stringify(productos)); */

/* let usuario;
let usuarioStorage = sessionStorage.getItem("user");

if(usuarioStorage){
  let message = `Bienvenido ${usuarioStorage}`;
  alert(message);
  usuario = usuarioStorage;
}else{
  alert("no estás en sesión");
  user = prompt("Ingrese su nombre");
  sessionStorage.setItem("user", user);
}
 */

localStorage.setItem("valor", JSON.stringify({nombre: "andres", edad: "12"}));
let data = localStorage.getItem("valor");
console.log(JSON.parse(data));


