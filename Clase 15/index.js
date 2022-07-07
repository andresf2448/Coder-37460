/* fetch(url, config); */

/* fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(res => {
  console.log(res[0].title);
  console.log(res[0].body);
}); */

/* const lista = document.getElementById("listado");

fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(res => {
  res.forEach(post => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.body}</p>
    `;

    lista.append(li);
  });
}); */

/* fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: "Mi post",
    body: "Estamos conectando con una api",
    userId: 1
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(response => response.json())
.then(response => console.log(response)) */

const lista = document.querySelector("#listado");

/* fetch("./data.json")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((producto) => {
      const li = document.createElement("li");
      li.innerHTML = `
                <h4>${producto.nombre}</h4>
                <p>${producto.precio}</p>
                <p>Código: ${producto.id}</p>
                <hr/>
            `;

      lista.append(li);
    });
  }); */

/* const pedirDatos = async () => {
  const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await respuesta.json();

  data.forEach((post) => {
    const li = document.createElement("li");
    li.innerHTML = `
        <h4>${post.title}</h4>
        <p>${post.body}</p>
    `;
    lista.append(li);
  });
};

pedirDatos(); */