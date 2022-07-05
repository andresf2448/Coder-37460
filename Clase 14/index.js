/* setTimeout(funcion a ejecutar, milisegundos para ejecutar la funcion); */
/* console.log("Incio");

setTimeout(() => {
  console.log("Intermedio");
}, 3000);

console.log("final"); */

/* const btn = document.getElementById('boton');
const mensaje = document.getElementById('mensaje');

btn.addEventListener('click', () => {
  mensaje.classList.add('amarillo');

  setTimeout(() => {
    mensaje.classList.remove('amarillo');
  }, 3000);
}) */

/* for (let letra of "hola") {
  setTimeout(() => {
      console.log(letra)
  }, 1000)
}

for (let letra of "mundo") {
  setTimeout(() => {
      console.log(letra)
  }, 3000)
} */

/* console.log("Inicio");

setTimeout(() => {
  console.log("Intermedio");
}, 0);

console.log("final"); */


/* function multiply (x, y) {    
  return x * y;
}

function printSquare (x) {    
  let s = multiply(x, x);    
  console.log(s);
}

printSquare(5);

 */

/* setInterval(() => {
  console.log("repito");
}, 1000);

console.log("hola"); */

/* let counter = 0

const interval = setInterval(() => {
    counter++
    console.log("Counter: ", counter)

    if (counter >= 5) {
        clearInterval(interval)
        console.log("Se removió el intervalo")
    }
}, 1000) */

/* 
estructura de una promesa

new Promise((resolve, reject) => {
  codigo o cuerpo de la promesa
})
*/

/* const eventoFuturo = (valor) => {
  return new Promise((resolve, reject) => {
    if(valor){
      resolve("Promesa resuelta");
    }else{
      reject("Promesa rechazada");
    }
  })
}

console.log(eventoFuturo(false)); */

const eventoFuturo = (valor) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      valor ? resolve(["andres", "marina"]) : reject("Promesa rechazada");
    }, 3000)
  })
}

/* eventoFuturo(false)
.then(response => {
  console.log(response);
  console.log("respuesta exitosa");
})
.catch(error => console.log("Intente más tarde " + error))
.finally(() => {
  console.log("proceso finalizado");
}); */

const usuarios = [
  {id: 1, nombre: "maria", edad: 10},
  {id: 2, nombre: "pepito", edad: 15},
  {id: 3, nombre: "camila", edad: 20}
];

const pedirUsuarios = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(usuarios)
    }, 3000);
  })
}

pedirUsuarios()
.then(response => {
  response.forEach(el => {
    let div = document.createElement("div");
    div.innerHTML = `id: ${el.id}
                     nombre: ${el.nombre}
                     edad: ${el.edad}`
    
    document.body.append(div);
  })
})
.catch(error => {
  let div = document.createElement("div");
  div.innerHTML = `${error}`;
  document.body.append(div);
});
