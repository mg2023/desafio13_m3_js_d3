let ele = document.getElementById("ele1");

function pintar(color){
    ele = document.getElementById("ele1");
    ele.style.backgroundColor = color;
  }

 

  ele.addEventListener("click", ()=> { 
    pintar("yellow");
    console.log("Script para el punto 3.3")
  });
