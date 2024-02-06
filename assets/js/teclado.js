var color;

const cuadrado = document.querySelector("#key");

document.addEventListener("keydown", function(event){
    if(event.key === "a")
    {
        color = 'pink';
    }
    else if(event.key ==="s"){
        color = 'orange';
    }
    else if(event.key==="d"){
        color = 'lightblue';
    }
    else if(event.key==="q"){
        agregar_elemento('purple');
    }
    else if(event.key==="w"){
        agregar_elemento('grey');
    }
    else if(event.key==="e"){
        agregar_elemento('brown');
    }

    pintar(cuadrado, color);
    console.log(color);

})

function pintar(elemento, colores)
{
    elemento.style.backgroundColor=colores;
}

function agregar_elemento(colores2){
    contenedor = document.getElementById("contenedor");

    nuevoElemento = document.createElement("div");
    nuevoElemento.style.backgroundColor=colores2;
    contenedor.appendChild(nuevoElemento);
}