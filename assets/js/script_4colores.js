const color_1 = document.querySelector("#primero");
const color_2 = document.querySelector("#segundo");
const color_3 = document.querySelector("#tercero");
const color_4 = document.querySelector("#cuarto");



color_1.addEventListener("click",()=>{
   pintar(color_1);
})

color_2.addEventListener("click",()=>{
    pintar(color_2);
})

color_3.addEventListener("click",()=>{
    pintar(color_3)
})

color_4.addEventListener("click",()=>{
    pintar(color_4);
})

function pintar(elemento){
    elemento.style.backgroundColor='black';
}