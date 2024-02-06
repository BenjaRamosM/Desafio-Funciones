function pintar(color='green')
{
     ele.style.backgroundColor = color;
}

const ele = document.querySelector("#ele1");
ele.addEventListener("click", () =>{
    pintar('yellow');
})

window.onload=pintar();

