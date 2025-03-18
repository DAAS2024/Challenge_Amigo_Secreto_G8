let listaAmigos = [];

function agregarAmigos() {
  let nombreIngresado = document.getElementById("nombre").value.trim();
  if (nombreIngresado == ""&&!(document.getElementById('segundoBoton').disabled)) {
    alert("Ingrese un nombre por favor");
  } else {
    listaAmigos.push(nombreIngresado);
    let ul = document.querySelector(".listaDeAmigos");
    let li = document.createElement("li");
    li.textContent = nombreIngresado;
    ul.appendChild(li);
    limpiarCampo();
  }
}

function sortearAmigos() {
  if(listaAmigos.length!=0){
    let indice = Math.floor(Math.random() * listaAmigos.length);
    let li = document.querySelectorAll("li");
    li.forEach((e) => e.remove());
    let parrafo = document.createElement("p");
    parrafo.textContent = `El amigo sorteado es ${listaAmigos[indice]}`;
    let ul = document.querySelector(".listaDeAmigos");
    ul.appendChild(parrafo);
    document.getElementById("tercerBoton").removeAttribute("disabled");
    document.getElementById("modal").showModal();
    document.getElementById(
      "mostrarAmigo"
    ).innerHTML = `Felicidades ${listaAmigos[indice]}`;
    document.getElementById("segundoBoton").setAttribute("disabled", true);
    cambiarColor("segundoBoton", "tercerBoton");
    document.getElementById("nombre").disabled = true;
  }else {
    alert("No hay amigos en la lista para sortear.");
  }
}

function limpiarCampo() {
  document.getElementById("nombre").value = "";
} 

function nuevoSorteo() {
  document.getElementById("tercerBoton").setAttribute("disabled", true);
  document.querySelector("p").remove();
  listaAmigos = [];
  document.getElementById("segundoBoton").removeAttribute("disabled");
  condicionesIniciales();
}
function cerrar() {
  document.getElementById("modal").close();
}

function cambiarColor(elemento1, elemento2) {
  let atributo1 =
    document.getElementById(elemento1).getAttribute("disabled") != null;
  if (atributo1 == true) {
    document.getElementById(elemento1).style.backgroundColor = "gray";
    document.getElementById(elemento2).style.backgroundColor = "#602f51";
  }
}

function condicionesIniciales() {
  document.getElementById("segundoBoton").style.backgroundColor = "#207b1a";
  document.getElementById("tercerBoton").style.backgroundColor = "gray";
  document.getElementById("nombre").removeAttribute("disabled");
}

